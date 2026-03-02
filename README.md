# philtompkins.com

Phil Tompkins' personal portfolio website.

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **Lucide React** for icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3002` |
| `NODE_ENV` | Environment | `development` |

## Deployment

Pushes to `main` automatically deploy via GitHub Actions.
