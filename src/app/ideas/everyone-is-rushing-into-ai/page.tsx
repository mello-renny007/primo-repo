import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Everyone Is Rushing Into AI. I Spent a Month Asking If They Should. | Renata Aguilar",
  description:
    "What building an AI product taught me about the role that comes after Technical Program Manager — and the AI Orchestration Framework I developed along the way.",
  keywords: ["AI program management", "Technical Program Manager AI", "AI Orchestration Framework", "AI readiness assessment", "AI implementation lifecycle", "AI adoption strategy", "enterprise AI readiness", "AI governance framework", "TPM to AI Orchestrator", "human in the loop AI"],
  alternates: { canonical: "https://renataaguilar.company/ideas/everyone-is-rushing-into-ai" },
  openGraph: {
    title: "Everyone Is Rushing Into AI. I Spent a Month Asking If They Should. | Renata Aguilar",
    description:
      "What building an AI product taught me about the role that comes after Technical Program Manager — and the AI Orchestration Framework I developed along the way.",
    url: "https://renataaguilar.company/ideas/everyone-is-rushing-into-ai",
    type: "article",
    images: [{ url: "/og-everyone-is-rushing-into-ai.png", width: 1200, height: 630 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Everyone Is Rushing Into AI. I Spent a Month Asking If They Should.",
  description: "What building an AI product taught me about the role that comes after Technical Program Manager — and the AI Orchestration Framework I developed along the way.",
  datePublished: "2026-04-01",
  author: {
    "@type": "Person",
    name: "Renata Aguilar",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://renataaguilar.company/ideas/everyone-is-rushing-into-ai",
  },
  about: {
    "@type": "Thing",
    name: "AI Orchestration Framework",
    description: "A 6-phase AI implementation lifecycle framework developed while building an enterprise AI readiness advisor.",
  },
};

export default function EveryoneIsRushingIntoAI() {
  return (
    <div className="px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-prose mx-auto">
        <article className="pt-48 pb-32">
          {/* Header */}
          <header className="mb-20">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.15] mb-6">
              Everyone Is Rushing Into AI. I Spent a Month Asking If They Should.
            </h1>
            <p className="text-dim text-sm">April 2026 &middot; 12 min read</p>
          </header>

          {/* Definition Block */}
          <Reveal>
            <div className="mb-20 border border-accent px-8 py-10">
              <div className="space-y-6 text-dim text-lg leading-[1.8]">
                <p>
                  <span className="text-fg font-semibold">That&rsquo;s When I Became an Orchestrator.</span> What building an AI product taught me about the role that comes after Technical Program Manager.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Opening */}
          <Reveal>
            <div className="mb-20">
              <div className="space-y-8 text-dim text-lg leading-[1.8]">
                <p>
                  There is this subtle but loud urgency that is implied for organizations to get on board with the fast paced AI movement. I call it the AI absorption race. Get on board or get left behind &mdash; that&rsquo;s the ultimatum written between the lines of every AI story right now. It&rsquo;s real. And it&rsquo;s happening fast. But underneath all that urgency is a quieter feeling most people won&rsquo;t say out loud: nobody actually knows what they&rsquo;re doing yet.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 1 */}
          <Reveal>
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">The Problem: Eagerness Over Feasibility</h2>
              <div className="space-y-8 text-dim text-lg leading-[1.8]">
                <p>
                  The pattern I keep seeing is this: Someone in leadership decides the organization needs to jump on the AI train because it is moving fast, then that AI initiative is handed to a program team with a deadline, and nobody asks whether the data is organized enough to use. Nobody checks if engineering has capacity. Nobody defines what &ldquo;accurate results&rdquo; means before the initiative goes live. Months later, the tool exists but either nobody trusts it or understands the purpose &mdash; which then leads to the initiative getting quietly deprioritized. The problem wasn&rsquo;t the technology. It was eagerness over feasibility.
                </p>
                <p>
                  It is evident that organizations feel the urgent need to absorb AI in some way shape or form but understanding the WHY that need is prevalent is what most often organizations fail to address. Is it not important to discuss the problem or pain points as well as the costs? The cost isn&rsquo;t just the API bill but the engineering time, the data cleanup, the adoption &mdash; and not to mention the cost on trust when results are wrong and the AI initiative is no longer credible. Any system built on bad data fails in silence and the impacts could be catastrophic, and usually results in loss.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 2 */}
          <Reveal>
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">The Role Shift: From TPM to Orchestrator</h2>
              <div className="space-y-8 text-dim text-lg leading-[1.8]">
                <p>
                  Throughout middle school and high school, I was a proud orchestra member. I played both the violin and the guitar but I gravitated to the violin because it was more challenging and that instrument was too captivating to give up. I knew my role in the orchestra was important along with every other player and their instrument &mdash; but the role I admired most was the one of the orchestra conductor. The leader responsible for tempo, artistic interpretation, and coordination. Easier said than done, but this role was key for any score to deliver the exact speed, dynamics, and emotion to the audience.
                </p>
                <p>
                  During the time I&rsquo;ve spent creating the AI Enterprise Advisor tool, I started to realize that I was operating from a place of that of an Orchestrator rather than a Technical Program Manager. I was not managing a plan or tracking milestones nor was I delivering something on time. I was designing flows, gatekeeping the quality of the outputs, and delivering what actually works. It was more than just coordinating engineers &mdash; it was coordinating an orchestra; people and AI. This is where it hit me: the shift of the TPM role in the AI movement has changed to &ldquo;The Orchestrator.&rdquo; This new role does not replace the TPM. It evolves from it.
                </p>
                <p>
                  It is expected that as AI momentum builds up, roles will have to evolve with it too. The execution skills still matter. But the primary output changes. You&rsquo;re no longer delivering a status update. You&rsquo;re delivering a system design: who needs what information, in what format, with what human checkpoint before it gets acted on. That shift sounds subtle &mdash; but as someone who got on board, what I discovered is only the tip of a new iceberg.
                </p>
                <p>
                  This new role sits at the intersection of strategy, systems thinking, and sufficient technical knowledge to ask the right questions.
                </p>
              </div>

              {/* TPM Mindset vs Orchestrator Mindset */}
              <div className="mt-12 border border-[#1c2a2e] rounded-xl overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#1c2a2e]">
                      <th className="text-left text-[11px] font-medium tracking-[0.15em] uppercase text-[#3a3a3a] py-3 px-6 w-[44%]">TPM Mindset</th>
                      <th className="w-[12%]"></th>
                      <th className="text-left text-[11px] font-medium tracking-[0.15em] uppercase text-[#7a9aa4] py-3 px-6 w-[44%]">Orchestrator Mindset</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Manages the plan',    'Designs the system'],
                      ['Tracks milestones',   'Gatekeeps quality'],
                      ['Coordinates people',  'Coordinates people + AI'],
                      ['Delivers on time',    'Delivers what works'],
                      ['Reports status',      'Interprets signals'],
                      ['Follows the process', 'Designs the process'],
                    ].map(([left, right], i, arr) => (
                      <tr key={left} className={i < arr.length - 1 ? 'border-b border-[#111a1e]' : ''}>
                        <td className="py-4 px-6 text-[14px] font-light text-dim">{left}</td>
                        <td className="text-center text-[13px] text-[#1c2a2e]">→</td>
                        <td className="py-4 px-6 text-[14px] text-[#8ab0bc]">{right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="border-t border-[#141e20] px-6 py-4 flex flex-col gap-1">
                  <p className="font-serif text-[15px] text-[#2a4048] italic">These came from decisions made while building something real.</p>
                  <p className="text-[11px] text-[#2a3a3e] tracking-[0.06em] text-right"><a href="https://enterpriseaiadvisor.company/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a9aa4] transition-colors">enterpriseaiadvisor.company</a> — Renata Aguilar</p>
                </div>
              </div>

              <div className="mt-8 text-dim text-lg leading-[1.8]">
                <p>These didn&rsquo;t come from a framework I read. They came from decisions I had to make while building something real.</p>
              </div>
            </div>
          </Reveal>

          {/* Section 3 */}
          <Reveal>
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">The AI Orchestration Framework</h2>
              <div className="space-y-8 text-dim text-lg leading-[1.8]">
                <p>
                  What follows is the AI Orchestration Framework I developed while building the Enterprise AI Advisor: a tool that generates personalized AI readiness reports for organizations. Every phase maps to something I did well initially but then had to pivot the second time, or discovered the hard way. Empiricism at its best.
                </p>
              </div>

              {/* AI Orchestration Framework — 3×2 grid */}
              <div className="mt-12 mb-12">
                <div className="grid grid-cols-3 gap-[10px]">
                  {[
                    ['01', 'Signal & Problem Context',    'Real problem vs AI problem.'],
                    ['02', 'Readiness & Decision Making', 'Feasibility over eagerness.'],
                    ['03', 'Architecture & Pathway',      'Design decisions before systems.'],
                    ['04', 'Build & Resist',              'Incremental, validated, reversible.'],
                    ['05', 'Adoption & Feedback Loop',    'Behavior change, not announcement.'],
                    ['06', 'Governance & Evolution',      'Accountability over time.'],
                  ].map(([n, name, tag]) => (
                    <div key={n} className="border border-[#1c2a2e] rounded-xl px-[22px] py-[26px] text-center bg-[#0a1214]">
                      <p className="text-[11px] text-[#2a4048] tracking-[0.15em] font-medium mb-3">{n}</p>
                      <p className="font-serif text-[19px] font-medium text-[#b8ccd2] leading-tight mb-3">{name}</p>
                      <div className="w-6 h-px bg-[#1c2a2e] mx-auto mb-3" />
                      <p className="text-[12px] text-[#2e4a52] italic font-light leading-relaxed">{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#141e20] mt-[28px] pt-5 flex flex-col gap-1">
                  <p className="font-serif text-[15px] text-[#2a4048] italic">A practical lifecycle for humans to design decisions before systems.</p>
                  <p className="text-[11px] text-[#2a3a3e] tracking-[0.06em] text-right"><a href="https://enterpriseaiadvisor.company/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a9aa4] transition-colors">enterpriseaiadvisor.company</a> — Renata Aguilar</p>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 1 &mdash; Signal &amp; Problem Context</p>
                  <p className="text-dim text-sm italic mb-4">Real problem vs AI problem.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    When I started building the Enterprise AI Advisor, the signal was specific: organizations are constantly spending precious efforts trying out generic AI frameworks that didn&rsquo;t reflect their actual data, team, or tools. But most importantly, there was no real intent behind the problem and the reason why they were investing in AI to begin with. The pain point was pretty evident. The solution was an AI assessment review before throwing resources &mdash; which resulted in a personalized report a decision maker could act on right away. That clarity made every subsequent decision easier. When you know the real problem, you stop searching in the pool of tools and lock in an adequate path forward tailored to the organization&rsquo;s problem statement.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;If we didn&rsquo;t build this, what would still break?&rdquo;
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 2 &mdash; Readiness &amp; Decision Making</p>
                  <p className="text-dim text-sm italic mb-4">Feasibility over eagerness.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    The Enterprise AI Advisor scores organizations across five elements: data quality, infrastructure, operational complexity, governance, and automation potential. The most common gap isn&rsquo;t technical &mdash; it&rsquo;s data readiness. Organizations with documentation scattered across four tools, no naming conventions, and no version control are not ready to build an AI layer on top. The system will work. The results won&rsquo;t be trustworthy. And once users get three bad results, they lose trust and stop trying. Eventually, the system that became an urgency turned out to be a bad investment with a bad reputation.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;If we started building today, what would break first and why?&rdquo;
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 3 &mdash; Architecture &amp; Pathway</p>
                  <p className="text-dim text-sm italic mb-4">Design decisions before systems.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    At this point, it is important to stop and understand the readiness the organization has on AI absorption. Once that is assessed, it is critical to lay out the flow of information and the intent the technical system will serve. Mapping out who needs what information, in what format, with what human checkpoint before execution. The most impactful architecture decision I made building the advisor wasn&rsquo;t technical. It was deciding to surface results through Slack because every team already lived there. Zero new behavior required. That&rsquo;s not an engineering decision, that&rsquo;s an Orchestrator decision.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;What&rsquo;s the path of least resistance?&rdquo;
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 4 &mdash; Build &amp; Resist</p>
                  <p className="text-dim text-sm italic mb-4">Incremental, validated, reversible.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    Finally, the execution phase &mdash; but this does not mean to build everything at once. Resist the pressure. The right way to build an AI system is incrementally: one source, one use case, for a small set of users. Gate each piece of work based on measured quality and in parallel, build the governance layer &mdash; data privacy reviews, content audits, ownership assignments, tagging conventions. When I built the advisor, the instinct was to connect everything at once. The right call was to start with one source, run real queries, measure accuracy, and only expand when it earned the trust.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;What&rsquo;s the minimum we need to prove this works before we commit to the full build?&rdquo;
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 5 &mdash; Adoption &amp; Feedback Loop</p>
                  <p className="text-dim text-sm italic mb-4">Behavior change, not announcement.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    The adoption plan I build into every report includes one recommendation that surprises people: deliver a 30-minute walkthrough for each team using real examples from their actual work &mdash; not a generic demo. The key is making the new behavior easier than the old one. When someone from Operations finds a document they&rsquo;ve been hunting for in 10 seconds, they&rsquo;re already sold. And having a feedback loop from day one &mdash; a live channel where users can flag when a result is wrong, stale, or unhelpful &mdash; is non-negotiable. The question isn&rsquo;t whether the system makes mistakes. It&rsquo;s whether you know about them fast enough to fix them before they become the story people tell about the system.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;What would it take to bring forth the behavior change?&rdquo;
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">Phase 6 &mdash; Governance &amp; Evolution</p>
                  <p className="text-dim text-sm italic mb-4">Accountability over time.</p>
                  <p className="text-dim text-lg leading-[1.8] mb-4">
                    The governance section of every Enterprise AI Advisor report asks one question most organizations haven&rsquo;t answered: who is accountable when the system returns a wrong result? Not who built it &mdash; but who owns the content that caused it. Without that answer, quality degrades silently and the blame lands on the technology instead of the process. Accountability over time isn&rsquo;t a governance principle. It&rsquo;s the difference between a pilot and a sustainable system.
                  </p>
                  <p className="text-dim text-lg leading-[1.8] border-l-2 border-rule pl-6 italic">
                    Orchestrator&rsquo;s question: &ldquo;Six months from now, what could deteriorate and who is responsible for fixing it?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 4 */}
          <Reveal>
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">The 5 Orchestrator Principles</h2>
              <div className="space-y-8 text-dim text-lg leading-[1.8]">
                <p>
                  These five principles didn&rsquo;t come from a framework I read. They came from decisions I had to make &mdash; some right, some wrong &mdash; while building something real.
                </p>
              </div>

              {/* 5 Orchestrator Principles — horizontal row */}
              <div className="mt-12 mb-12">
                <div className="grid grid-cols-5 border border-[#1c2a2e] rounded-xl overflow-hidden">
                  {[
                    ['Intent before execution', 'Know the why before the how.'],
                    ['Readiness first',          'Fix the foundation before you build.'],
                    ['Judgment is a must',       'Human oversight is the design, not the fallback.'],
                    ['Design with trust',        'Credibility is earned, not assumed.'],
                    ['Balance the data',         'Numbers tell you what. People tell you why.'],
                  ].map(([name, sub], i, arr) => (
                    <div key={name} className={`px-4 py-7 text-center bg-[#0a1214]${i < arr.length - 1 ? ' border-r border-[#1c2a2e]' : ''}`}>
                      <p className="font-serif text-[16px] font-medium text-[#b8ccd2] leading-snug mb-3">{name}</p>
                      <div className="w-[22px] h-px bg-[#1c2a2e] mx-auto mb-3" />
                      <p className="text-[12px] text-[#2e4a52] italic font-light leading-relaxed">{sub}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#141e20] mt-[28px] pt-5 flex flex-col gap-1">
                  <p className="font-serif text-[15px] text-[#2a4048] italic">Principles built from real decisions, not theory.</p>
                  <p className="text-[11px] text-[#2a3a3e] tracking-[0.06em] text-right"><a href="https://enterpriseaiadvisor.company/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a9aa4] transition-colors">enterpriseaiadvisor.company</a> — Renata Aguilar</p>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <p className="text-fg font-semibold text-lg mb-1">01 &mdash; Intent before execution</p>
                  <p className="text-dim text-sm italic mb-4">Know the why before the how.</p>
                  <p className="text-dim text-lg leading-[1.8]">
                    Before any tool is selected, any vendor is evaluated, or any engineer is assigned, start by defining the why. If the initiative only makes sense when resources are overflowing, it&rsquo;s not solving a real problem. The Orchestrator&rsquo;s first job is to make the problem statement specific enough that everyone in the room agrees on what &ldquo;solved&rdquo; looks like.
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">02 &mdash; Readiness first</p>
                  <p className="text-dim text-sm italic mb-4">Fix the foundation before you build.</p>
                  <p className="text-dim text-lg leading-[1.8]">
                    You cannot index your way out of bad data. You cannot automate your way around an unclear process. Readiness is not a checkbox, it&rsquo;s a score &mdash; and it tells you where to start first. The organizations that skip this phase and go straight to building are the ones who end up with a technically functional system that nobody trusts or uses.
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">03 &mdash; Judgment is a must</p>
                  <p className="text-dim text-sm italic mb-4">Human oversight is the design, not the fallback.</p>
                  <p className="text-dim text-lg leading-[1.8]">
                    The &ldquo;human in the loop&rdquo; framing is often defensive &mdash; as if judgment is the thing you add when AI fails. Reframe it: human judgment is the most important design decision in the system. The AI handles the volume. You handle the exceptions, the edge cases, the context that doesn&rsquo;t fit the pattern, and the moments when something is technically correct but organizationally wrong.
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">04 &mdash; Design with trust</p>
                  <p className="text-dim text-sm italic mb-4">Credibility is earned, not assumed.</p>
                  <p className="text-dim text-lg leading-[1.8]">
                    Every AI system starts with a trust deficit. Users haven&rsquo;t seen it work yet. The Orchestrator&rsquo;s job is to design for that reality &mdash; start small, prove accuracy, expand only when the foundation is solid. Credibility is built one correct result at a time and it is lost one bad result at a time. Design accordingly and with integrity.
                  </p>
                </div>

                <div>
                  <p className="text-fg font-semibold text-lg mb-1">05 &mdash; Balance the data</p>
                  <p className="text-dim text-sm italic mb-4">Numbers tell you what. People tell you why.</p>
                  <p className="text-dim text-lg leading-[1.8]">
                    Quantitative metrics tell you adoption rate, query success rate, time saved. Qualitative feedback tells you why someone stopped using the system, what they were actually looking for, and what would make them trust it more. Both matter. The Orchestrator who only reads dashboards misses the signals that lead to failure. The one who only listens to anecdotes misses the patterns. Balance both.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Closing Reflection */}
          <Reveal>
            <div className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">Closing Reflection</h2>
              <div className="space-y-8 text-lg leading-[1.8]">
                <p className="text-dim">
                  I didn&rsquo;t set out to build a framework. I set out to build a tool that proved a point &mdash; that the most valuable thing an experienced program leader brings to an AI initiative isn&rsquo;t project management skills. It&rsquo;s judgment. The ability to ask the right questions before anyone writes a line of code.
                </p>
                <p className="text-dim">
                  The Orchestrator role doesn&rsquo;t have a job description yet. But it has a set of responsibilities that someone needs to own &mdash; and in most organizations right now, nobody is owning them. The signal is getting missed. The AI readiness assessment is getting skipped. The governance layer is getting built after the fact.
                </p>
                <p className="text-dim">
                  Most organizations jump straight to &ldquo;which tools &mdash; Pinecone or LangChain, GPT-4o or Claude?&rdquo; The advisor asks a different question first: are you actually ready to build on top of any of these? The vector database will faithfully surface whatever you put into it. The Orchestrator&rsquo;s job is to make sure what you put in is worth surfacing.
                </p>
                <p className="text-fg">
                  If you&rsquo;re a TPM, ops lead, or project manager trying to figure out where you fit in an AI-driven organization, start with the signal. What problem is actually real? Try the assessment at <a href="https://enterpriseaiadvisor.company/" target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-2 hover:text-[#7a9aa4] transition-colors">enterpriseaiadvisor.company</a> and see what the report says about your organization&rsquo;s readiness. Then ask yourself: who in your organization is responsible for each gap it identifies? If the answer is unclear &mdash; that&rsquo;s your role.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Author */}
          <Reveal>
            <div className="border-t border-rule pt-10 mb-16">
              <p className="text-dim text-xs uppercase tracking-[0.15em] mb-4">About the Author</p>
              <p className="text-dim leading-[1.7]">
                Renata Aguilar is a Technical Program Manager with over a decade of experience leading complex cross-functional initiatives across technology and business organizations.
              </p>
            </div>
          </Reveal>

          {/* More Ideas */}
          <Reveal>
            <div className="border-t border-rule pt-10">
              <h2 className="font-serif text-2xl tracking-tight mb-8">More Ideas</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-fg">Is It Strategy, Planning, or Execution? Introducing The Strategy Alignment Stack</p>
                  <p className="text-dim text-sm">Why organizations often confuse strategic direction with planning and delivery &mdash; and how a simple framework can bring clarity.</p>
                </div>
                <div>
                  <p className="text-fg">Execution Doesn&rsquo;t Fix Strategy</p>
                  <p className="text-dim text-sm">Why delivering more work often hides deeper strategic problems.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Back link */}
          <Reveal>
            <div className="mt-16">
              <Link href="/ideas" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                All Ideas &rarr;
              </Link>
            </div>
          </Reveal>
        </article>
      </div>
    </div>
  );
}
