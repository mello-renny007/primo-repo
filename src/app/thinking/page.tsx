import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Think - TPM Philosophy",
  description:
    "My approach to technical program management: disciplined problem-solving, structured execution, and protecting delivery integrity.",
  alternates: { canonical: "https://renataaguilar.company/thinking" },
  openGraph: {
    title: "How I Think | Renata Aguilar - TPM Philosophy",
    description:
      "My approach to technical program management: disciplined problem-solving, structured execution, and protecting delivery integrity.",
    url: "https://renataaguilar.company/thinking",
  },
};

export default function Thinking() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <section className="pt-48 pb-32">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] mb-24">
            How I Think.
          </h1>

          <Reveal>
            <div className="space-y-10 text-dim text-lg leading-[1.8]">
              <p className="text-fg">Programs fail when alignment is assumed.</p>

              <div>
                <p>Between architecture and business intent.</p>
                <p>Between compliance and engineering reality.</p>
                <p>And between ambition and what the system can actually support.</p>
              </div>

              <p>When something feels unclear, I don&apos;t escalate emotion&mdash;I investigate structure.</p>

              <div>
                <p>Where is the friction?</p>
                <p>Where is the hidden dependency?</p>
                <p>What assumption hasn&apos;t been challenged?</p>
              </div>

              <p className="text-fg">Problem solving isn&apos;t dramatic. It&apos;s disciplined.</p>

              <div>
                <p>It&apos;s asking the harder question early.</p>
                <p>It&apos;s identifying risk before it becomes visible.</p>
                <p>It&apos;s choosing stability over noise.</p>
              </div>

              <div>
                <p>I don&apos;t micromanage engineers.</p>
                <p>I remove obstacles.</p>
                <p>I protect delivery integrity.</p>
              </div>

              <div>
                <p className="text-fg">Clarity over theatrics.</p>
                <p className="text-fg">Systems over shortcuts.</p>
                <p className="text-fg">Depth over surface performance.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 flex flex-col sm:flex-row gap-5">
              <Link href="/work" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                The Work &rarr;
              </Link>
              <Link href="/ideas" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                Ideas &rarr;
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
