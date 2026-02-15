import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Expertise" };

function Block({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 md:gap-10">
        {/* Left: number + line */}
        <div className="flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-teal text-bg text-xs font-bold flex items-center justify-center shrink-0">
            {num}
          </span>
          <div className="w-px bg-teal/20 flex-1 min-h-[40px] mt-3" />
        </div>
        {/* Right: content */}
        <div className="pb-20 md:pb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{title}</h2>
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export default function Expertise() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-site mx-auto">
        <section className="pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-24">
            What I Bring.
          </h1>

          <Block num="01" title="Tools I Use">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
              {["Jira","Asana","Confluence","MS Project","Smartsheet","Visio","Microsoft Teams","Slack","GitHub"].map(t => (
                <span key={t} className="text-dim text-lg">{t}</span>
              ))}
            </div>
          </Block>

          <Block num="02" title="How I Work">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
              <div className="space-y-3">
                <p className="text-dim text-lg">Agile (Scrum, Kanban, XP)</p>
                <p className="text-dim text-lg">Waterfall</p>
                <p className="text-dim text-lg">Hybrid Frameworks</p>
              </div>
              <div className="space-y-3">
                <p className="text-dim text-lg">SDLC</p>
                <p className="text-dim text-lg">Product Development Lifecycle</p>
                <p className="text-dim text-lg">Technical Writing</p>
                <p className="text-dim text-lg">Data Analysis</p>
              </div>
            </div>
          </Block>

          <Block num="03" title="Credentials">
            <div className="space-y-4 max-w-lg">
              {[
                { name: "Project Management Professional (PMP)\u00AE", year: "2025" },
                { name: "Certified Scrum Master (CSM)", year: "2017" },
                { name: "Certified Scrum Product Owner (CSPO)", year: "2018" },
              ].map(c => (
                <div key={c.name} className="flex items-baseline justify-between border-b border-rule pb-4">
                  <span className="text-fg text-lg">{c.name}</span>
                  <span className="text-teal text-sm font-mono ml-4 shrink-0">{c.year}</span>
                </div>
              ))}
            </div>
          </Block>

          <Block num="04" title="Leadership Experience">
            <div className="space-y-4">
              {[
                "Cross-functional team leadership (17+ engineers, designers, QA)",
                "PMO establishment & scaling",
                "Innovation hub development",
                "Agile coaching & transformation",
              ].map(item => (
                <p key={item} className="text-dim text-lg">{item}</p>
              ))}
            </div>
          </Block>

          {/* Last block — no trailing line */}
          <Reveal>
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span className="w-10 h-10 rounded-full bg-teal text-bg text-xs font-bold flex items-center justify-center shrink-0">
                  05
                </span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Industries</h2>
                <div className="space-y-4">
                  {[
                    "Digital Identity & Credentials",
                    "E-commerce & Retail",
                    "Logistics & Supply Chain",
                    "SaaS & Enterprise Software",
                  ].map(ind => (
                    <p key={ind} className="text-dim text-lg">{ind}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
