import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Work" };

const projects = [
  {
    title: "Learning & Employment Records (LER) Pilot",
    role: "Technical Program Manager",
    challenge: "Spearhead cross-functional pilot for secure digital credential issuance and verification in emerging credentialing technology.",
    impact: "Transformed complex compliance requirements into intuitive user solutions, bridging technical teams, business leaders, and external partners.",
  },
  {
    title: "New World E-Commerce App",
    role: "Technical Program Manager | Foodstuffs (New Zealand)",
    challenge: "Launch mobile grocery shopping app enabling direct purchases without third-party dependencies.",
    impact: "Delivered end-to-end mobile solution with pickup/delivery for one of New Zealand\u2019s largest grocery retailers.",
  },
  {
    title: "Transportation & Warehousing Platform",
    role: "Technical Program Manager | South America",
    challenge: "Replace manual logistics processes plagued by inefficiency and corruption with automated platform.",
    impact: "Streamlined distribution and last-mile delivery, bringing transparency to carrier-driver relationships while ensuring regulatory compliance and fair pay.",
  },
];

export default function Work() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-site mx-auto">

        <section className="pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
            Where I&apos;ve<br />Made Impact.
          </h1>
          <p className="text-dim text-lg mb-24">
            Programs driven from ambiguity to delivery.
          </p>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <Reveal key={i}>
                <article className="border-t border-rule py-16 md:py-20">
                  <div className="flex items-start gap-6 md:gap-10 mb-10">
                    <span className="text-teal text-sm font-mono mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                        {p.title}
                      </h2>
                      <p className="text-dim text-sm mt-2">{p.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:ml-[calc(1.5rem+2.5rem)]">
                    <div>
                      <p className="text-faint text-xs uppercase tracking-[0.15em] mb-3">Challenge</p>
                      <p className="text-dim leading-relaxed">{p.challenge}</p>
                    </div>
                    <div>
                      <p className="text-faint text-xs uppercase tracking-[0.15em] mb-3">Impact</p>
                      <p className="text-fg leading-relaxed">{p.impact}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
