import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatWidget from "@/components/ChatWidget";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Phil Tompkins — Builder of Things",
  description:
    "Portfolio of Phil Tompkins — engineering leader, startup founder, and builder scaling teams and technology.",
  openGraph: {
    title: "Phil Tompkins — Builder of Things",
    description:
      "Engineering leader, startup founder, and builder scaling teams and technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} font-[family-name:var(--font-fira)] antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
