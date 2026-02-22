import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: { default: "Renata Aguilar", template: "%s — Renata Aguilar" },
  description: "Technical Program Manager. Bringing clarity to complex systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="py-16 text-center text-dim tracking-wide">
          <p className="text-sm">Built with intention.</p>
          <p className="text-xs mt-1">&copy; {new Date().getFullYear()} Renata Aguilar</p>
        </footer>
      </body>
    </html>
  );
}
