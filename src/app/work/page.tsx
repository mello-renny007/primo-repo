import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = { title: "The Work" };

const sections = [
  {
    title: "Identity & Security Platforms",
    text: "Led decentralized identity initiatives aligned with emerging standards and regulatory ambiguity. Coordinated backend, API, compliance, and ecosystem stakeholders to deliver interoperable solutions.",
  },
  {
    title: "Enterprise Authentication Systems",
    text: "Directed cross-functional delivery for passwordless authentication platforms supporting enterprise environments. Strengthened roadmap predictability and Agile execution maturity.",
  },
  {
    title: "SaaS Product Launches",
    text: "Managed MVP-to-commercialization lifecycles, translating market ambiguity into prioritized engineering roadmaps.",
  },
  {
    title: "Governance & Delivery Design",
    text: "Built program structures and delivery governance models that improved cross-team visibility and milestone predictability.",
  },
];

export default function Work() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <section className="pt-48 pb-32">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
            Where This Discipline Has Been Applied.
          </h1>
          <p className="text-dim text-lg leading-[1.7] mb-24">
            Different domains. Same discipline: structured execution inside complex systems.
          </p>

          <div className="space-y-20">
            {sections.map((s, i) => (
              <Reveal key={i}>
                <article className="border-t border-rule pt-10">
                  <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-5">
                    {s.title}
                  </h2>
                  <p className="text-dim leading-[1.8]">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-fg text-lg mt-24 mb-12">
              The environments change. The discipline remains the same.
            </p>
          </Reveal>

          <Reveal>
            <Link href="/connect" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
              Connect &rarr;
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
