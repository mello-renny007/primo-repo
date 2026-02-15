import { Reveal } from "@/components/reveal";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — full viewport */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 relative">
        <div className="max-w-site mx-auto w-full">
          <p className="text-dim text-sm tracking-[0.2em] uppercase mb-6">
            Technical Program Manager
          </p>
          <h1 className="text-[clamp(3rem,9vw,10rem)] font-bold leading-[0.88] tracking-tight">
            RENATA
            <br />
            AGUILAR
          </h1>
          <p className="text-dim text-lg md:text-xl mt-8 max-w-md">
            Bringing order to chaos.
          </p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Intro section — visible on scroll */}
      <section className="px-6 md:px-12 py-32 border-t border-rule">
        <div className="max-w-site mx-auto">
          <Reveal>
            <p className="text-dim text-lg md:text-xl leading-[1.8] max-w-2xl">
              I turn ambiguity into action. With a background that spans military
              discipline and startup chaos, I lead cross-functional teams through
              complex programs&mdash;bridging technical teams, business stakeholders,
              and customers to ship what matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What I do — numbered blocks */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-site mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20">
              What I Do.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Reveal>
              <div>
                <span className="text-teal text-sm font-mono">01</span>
                <h3 className="text-xl font-bold mt-3 mb-4">Lead Programs</h3>
                <p className="text-dim leading-relaxed">
                  End-to-end ownership of complex, cross-functional programs from
                  discovery through delivery.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <span className="text-teal text-sm font-mono">02</span>
                <h3 className="text-xl font-bold mt-3 mb-4">Bridge Teams</h3>
                <p className="text-dim leading-relaxed">
                  Translate between engineering, product, design, and business
                  stakeholders so nothing gets lost.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <span className="text-teal text-sm font-mono">03</span>
                <h3 className="text-xl font-bold mt-3 mb-4">Build Systems</h3>
                <p className="text-dim leading-relaxed">
                  Design the processes, standards, and frameworks that turn good
                  teams into unstoppable ones.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-32 border-t border-rule pt-20">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Interested in working together?
            </h2>
          </Reveal>
          <Reveal>
            <Link href="/connect" className="text-teal text-lg hover:opacity-70 transition-opacity shrink-0">
              Get in touch &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
