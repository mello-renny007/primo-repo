import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Renata Aguilar", template: "%s — Renata Aguilar" },
  description: "Technical Program Manager. Bringing order to chaos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="py-12 text-center text-faint text-sm">
          <p>Built with intention.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Renata Aguilar</p>
        </footer>
      </body>
    </html>
  );
}
