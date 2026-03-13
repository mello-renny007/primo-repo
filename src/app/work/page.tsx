import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Work - TPM Portfolio",
  description:
    "Technical program leadership across identity platforms, authentication systems, SaaS launches, and delivery governance design.",
  alternates: { canonical: "https://renataaguilar.company/work" },
  openGraph: {
    title: "The Work | Renata Aguilar - TPM Portfolio",
    description:
      "Technical program leadership across identity platforms, authentication systems, SaaS launches, and delivery governance design.",
    url: "https://renataaguilar.company/work",
  },
};

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
            <Reveal>
              <article className="border-t border-rule pt-10">
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-2">
                  Identity &amp; Security Platforms
                </h2>
                <p className="text-dim text-lg mb-6">Verifiable Digital Credentials Pilot</p>
                <div className="space-y-6 text-dim leading-[1.8]">
                  <p>
                    The challenge wasn&apos;t just technical&mdash;it involved aligning more than ten ecosystem partners around emerging identity standards that were still evolving.
                  </p>
                  <p>
                    I coordinated backend engineering, API development, compliance stakeholders, and partner organizations to translate cryptographic requirements and regulatory uncertainty into a workable delivery plan.
                  </p>
                  <p>
                    The result was a pilot platform capable of issuing and verifying credentials while maintaining interoperability across partner implementations.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="border-t border-rule pt-10">
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-2">
                  Enterprise Authentication Systems
                </h2>
                <p className="text-dim text-lg mb-6">Passwordless Authentication Platform</p>
                <div className="space-y-6 text-dim leading-[1.8]">
                  <p>
                    Enterprise authentication systems require balancing security standards, engineering constraints, and product usability.
                  </p>
                  <p>
                    I directed cross-functional delivery across engineering, product, and security teams while strengthening roadmap clarity and Agile execution practices.
                  </p>
                  <p>
                    The result was a more predictable delivery structure and improved alignment between security initiatives and product development timelines.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="border-t border-rule pt-10">
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-2">
                  SaaS Product Launches
                </h2>
                <p className="text-dim text-lg mb-6">MVP to Commercialization Programs</p>
                <div className="space-y-6 text-dim leading-[1.8]">
                  <p>
                    Launching SaaS products often begins with market ambiguity and evolving product requirements.
                  </p>
                  <p>
                    I helped translate early product vision into structured engineering priorities, aligning delivery milestones with product and business goals.
                  </p>
                  <p>
                    These initiatives moved from MVP stages toward stable production environments and commercial deployment.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="border-t border-rule pt-10">
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-2">
                  Governance &amp; Delivery Design
                </h2>
                <p className="text-dim text-lg mb-6">Program Governance Frameworks</p>
                <div className="space-y-6 text-dim leading-[1.8]">
                  <p>
                    Large initiatives often struggle when teams lack shared visibility into progress and dependencies.
                  </p>
                  <p>
                    I designed program governance structures that improved milestone predictability, decision-making clarity, and cross-team coordination.
                  </p>
                  <p>
                    The result was stronger delivery alignment across initiatives involving multiple engineering and operational teams.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-24 mb-12">
              <p className="text-fg text-lg">
                The environments change. The discipline remains the same.
              </p>
              <p className="text-dim text-lg mt-4">
                Creating clarity, alignment, and forward momentum inside complex technical systems.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/ideas" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                Ideas &rarr;
              </Link>
              <Link href="/connect" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                Connect &rarr;
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
