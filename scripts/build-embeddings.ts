/**
 * Build embeddings from site content for RAG chat.
 * Run: npx tsx scripts/build-embeddings.ts
 */

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const CHUNK_SIZE = 500; // approx tokens (~2000 chars)
const CHUNK_OVERLAP = 100; // approx tokens (~400 chars)
const CHAR_PER_TOKEN = 4;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

interface EmbeddingEntry {
  text: string;
  embedding: number[];
  source: string;
}

/** Strip JSX/HTML tags and clean up text from page files */
function extractTextFromJSX(content: string, filePath: string): string {
  // Remove imports
  content = content.replace(/^import\s+.*$/gm, '');
  // Remove export/function declarations
  content = content.replace(/export\s+(const\s+metadata|default\s+function).*?\{/gs, '');
  // Extract string literals from metadata
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);

  // Remove JSX component tags but keep text content
  let text = content
    // Remove className and style attributes
    .replace(/className="[^"]*"/g, '')
    .replace(/style=\{[^}]*\}/g, '')
    // Remove JSX tags
    .replace(/<[^>]+>/g, ' ')
    // Remove curly brace expressions (but keep string content)
    .replace(/\{\/\*.*?\*\/\}/gs, '')
    // Clean &apos; etc
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Remove remaining JSX artifacts
    .replace(/\{[^}]*\}/g, ' ')
    // Remove closing braces and parens from JSX return
    .replace(/^\s*[)};]+\s*$/gm, '')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();

  // Prepend title/description if found
  const prefix = [titleMatch?.[1], descMatch?.[1]].filter(Boolean).join('. ');
  if (prefix) text = prefix + '. ' + text;

  return text;
}

/** Split text into overlapping chunks */
function chunkText(text: string, source: string): { text: string; source: string }[] {
  const chunkChars = CHUNK_SIZE * CHAR_PER_TOKEN;
  const overlapChars = CHUNK_OVERLAP * CHAR_PER_TOKEN;
  const chunks: { text: string; source: string }[] = [];

  if (text.length <= chunkChars) {
    chunks.push({ text, source });
    return chunks;
  }

  let start = 0;
  while (start < text.length) {
    let end = start + chunkChars;
    // Try to break at sentence boundary
    if (end < text.length) {
      const lastPeriod = text.lastIndexOf('. ', end);
      if (lastPeriod > start + chunkChars / 2) {
        end = lastPeriod + 2;
      }
    }
    chunks.push({ text: text.slice(start, end).trim(), source });
    start = end - overlapChars;
  }

  return chunks;
}

/** Find all page.tsx files */
function findPages(dir: string): string[] {
  const pages: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) pages.push(...findPages(full));
    else if (entry.name === 'page.tsx') pages.push(full);
  }
  return pages;
}

async function main() {
  if (!OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is required. Set it as an env variable.');
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, '..');
  const appDir = path.join(projectRoot, 'src/app');
  const contextFile = path.join(projectRoot, 'src/content/phil-context.md');

  // Collect all text chunks
  const allChunks: { text: string; source: string }[] = [];

  // Process page files
  const pages = findPages(appDir);
  for (const page of pages) {
    const relative = path.relative(projectRoot, page);
    const content = fs.readFileSync(page, 'utf-8');
    const text = extractTextFromJSX(content, page);
    if (text.length > 50) {
      const chunks = chunkText(text, relative);
      allChunks.push(...chunks);
    }
  }

  // Process phil-context.md
  if (fs.existsSync(contextFile)) {
    const content = fs.readFileSync(contextFile, 'utf-8');
    const chunks = chunkText(content, 'src/content/phil-context.md');
    allChunks.push(...chunks);
  }

  console.log(`Found ${allChunks.length} chunks from ${pages.length} pages + context file`);

  // Embed all chunks
  const entries: EmbeddingEntry[] = [];
  const batchSize = 20;

  for (let i = 0; i < allChunks.length; i += batchSize) {
    const batch = allChunks.slice(i, i + batchSize);
    console.log(`Embedding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allChunks.length / batchSize)}...`);

    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: batch.map((c) => c.text),
    });

    for (let j = 0; j < batch.length; j++) {
      entries.push({
        text: batch[j].text,
        embedding: response.data[j].embedding,
        source: batch[j].source,
      });
    }
  }

  // Save
  const outPath = path.join(projectRoot, 'src/data/embeddings.json');
  fs.writeFileSync(outPath, JSON.stringify(entries));
  const sizeMB = (fs.statSync(outPath).size / 1024 / 1024).toFixed(2);
  console.log(`Saved ${entries.length} embeddings to ${outPath} (${sizeMB} MB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
