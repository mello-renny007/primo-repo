import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const siteUrl = "https://renataaguilar.company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Renata Aguilar | Technical Program Manager",
    template: "%s | Renata Aguilar",
  },
  description:
    "Technical Program Manager specializing in identity systems, security platforms, and complex engineering delivery. 12+ years leading cross-functional teams in high-growth environments.",
  keywords: [
    "technical program manager",
    "TPM",
    "identity systems",
    "security platforms",
    "enterprise authentication",
    "agile delivery",
    "cross-functional leadership",
  ],
  authors: [{ name: "Renata Aguilar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Renata Aguilar",
    title: "Renata Aguilar | Technical Program Manager",
    description:
      "Technical Program Manager specializing in identity systems, security platforms, and complex engineering delivery.",
  },
  twitter: {
    card: "summary",
    title: "Renata Aguilar | Technical Program Manager",
    description:
      "Technical Program Manager specializing in identity systems, security platforms, and complex engineering delivery.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Renata Aguilar",
  jobTitle: "Technical Program Manager",
  url: siteUrl,
  email: "renata.aguilar007@gmail.com",
  sameAs: ["https://www.linkedin.com/in/renata-aguilar-5382954b/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
