import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Who I Am" };

const traits = [
  "Transforms complexity into clarity",
  "Bridges technical teams and business stakeholders",
  "Builds processes that scale from chaos",
  "Unifies teams around shared goals",
  "Embraces resilience through challenges",
  "Leads with empathy and trust",
  "Drives momentum when progress stalls",
];

export default function About() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-site mx-auto">

        {/* Hero */}
        <section className="pt-40 pb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-20">
            Who I Am.
          </h1>
          <div className="max-w-2xl space-y-8 text-dim text-lg leading-[1.75]">
            <p>
              Becoming a program manager was never part of the plan. I was on track for a military career—structure, discipline, clear missions. Life had other ideas. I found myself in a South American startup building web platforms for pharmaceutical companies, wearing every hat imaginable. In that chaos, I discovered something unexpected: I was still a soldier, just with different missions. Instead of tactical operations, I was leading project teams through the trenches, navigating ambiguity, and delivering impact under pressure.
            </p>
            <p>
              What I love most is the leadership—the ability to make a tangible impact with my teams, to learn from every battle, and to deliver real value to customers. My approach blends simplicity and complexity: I lean on Simon Sinek&apos;s Golden Circle to align teams around the &ldquo;why,&rdquo; and I use post-mortem analysis to turn every setback into forward momentum. It&apos;s about bringing order to chaos, one mission at a time.
            </p>
          </div>
        </section>

        {/* Traits */}
        <section className="pb-32" aria-labelledby="traits-heading">
          <Reveal>
            <h2 id="traits-heading" className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-16">
              What Makes Me<br />Stand Out.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl">
            {traits.map((trait, i) => (
              <Reveal key={i}>
                <div className="flex items-baseline gap-5 py-5 border-b border-rule">
                  <span className="text-teal text-sm font-mono shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-fg text-lg">{trait}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
