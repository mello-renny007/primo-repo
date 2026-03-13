import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ideas on Strategy & Execution | Renata Aguilar - Technical Program Manager",
  description:
    "Essays on strategy, execution, and leadership from the perspective of building complex technical programs.",
  keywords: ["strategy", "execution", "technical program management", "leadership", "agile"],
  alternates: { canonical: "https://renataaguilar.company/ideas" },
  openGraph: {
    title: "Ideas on Strategy & Execution | Renata Aguilar - Technical Program Manager",
    description:
      "Essays on strategy, execution, and leadership from the perspective of building complex technical programs.",
    url: "https://renataaguilar.company/ideas",
  },
};

const moreIdeas = [
  {
    title: "Execution Doesn\u2019t Fix Strategy",
    description: "Why delivering more work often hides deeper strategic problems.",
    readTime: "Coming Soon",
  },
  {
    title: "Alignment vs Consensus in Leadership",
    description: "Why leadership alignment is not the same as agreement.",
    readTime: "Coming Soon",
  },
];

export default function Ideas() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <section className="pt-48 pb-32">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
            Ideas.
          </h1>
          <p className="text-dim text-lg leading-[1.7] mb-24">
            Ideas on strategy, execution, and leadership from the perspective of building and delivering complex technical programs.
          </p>

          {/* Featured */}
          <Reveal>
            <article className="mb-24">
              <p className="text-dim text-xs uppercase tracking-[0.15em] mb-4">Featured</p>
              <Link href="/ideas/strategy-alignment-stack" className="group">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.15] mb-4 text-fg group-hover:opacity-80 transition-opacity duration-200">
                  Is It Strategy, Planning, or Execution? Introducing The Strategy Alignment Stack
                </h2>
                <p className="text-dim leading-[1.7] mb-4">
                  Why organizations often confuse strategic direction with planning and delivery&mdash;and how a simple framework can bring clarity.
                </p>
                <p className="text-dim text-sm">March 2026 &middot; 5 min read</p>
              </Link>
            </article>
          </Reveal>

          {/* More Ideas */}
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-12">
                More Ideas
              </h2>
              <div className="space-y-0">
                {moreIdeas.map((idea, i) => (
                  <article key={i} className="border-t border-rule py-10">
                    <h3 className="font-serif text-xl md:text-2xl tracking-tight mb-3 text-fg">
                      {idea.title}
                    </h3>
                    <p className="text-dim leading-[1.7] mb-3">{idea.description}</p>
                    <p className="text-dim text-sm">{idea.readTime}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 flex flex-col sm:flex-row gap-5">
              <Link href="/work" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                The Work &rarr;
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
