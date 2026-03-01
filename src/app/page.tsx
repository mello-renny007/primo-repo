import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renata Aguilar | Technical Program Manager - Identity & Security Systems",
  description:
    "Bringing clarity to complex systems. Technical Program Manager operating at the intersection of engineering execution and strategic alignment.",
  alternates: { canonical: "https://renataaguilar.company" },
  openGraph: {
    title: "Renata Aguilar | Technical Program Manager - Identity & Security Systems",
    description:
      "Bringing clarity to complex systems. Technical Program Manager operating at the intersection of engineering execution and strategic alignment.",
    url: "https://renataaguilar.company",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 relative">
        <div className="max-w-prose mx-auto w-full">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight">
            Bringing clarity to complex systems.
          </h1>
          <p className="text-dim text-lg mt-8 leading-[1.7]">
            Technical Program Manager operating at the intersection of engineering execution and strategic alignment.
          </p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Body */}
      <section className="px-6 md:px-12 pt-32 pb-32">
        <div className="max-w-prose mx-auto">
          <Reveal>
            <div className="space-y-10 text-lg leading-[1.8] text-dim">
              <div>
                <p>I work inside complexity.</p>
                <p>High-growth environments.</p>
                <p>Emerging standards.</p>
                <p>Teams navigating real ambiguity.</p>
              </div>
              <p className="text-fg">
                The role is straightforward. The execution rarely is.
              </p>
              <div>
                <p>I create alignment.</p>
                <p>I restore clarity.</p>
                <p>I protect execution integrity.</p>
              </div>
              <p className="text-fg">
                This reflects how I operate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTAs */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-prose mx-auto flex flex-col sm:flex-row gap-5">
          <Reveal>
            <Link href="/journey" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
              The Journey &rarr;
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/thinking" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
              How I Think &rarr;
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/connect" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
              Connect &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
