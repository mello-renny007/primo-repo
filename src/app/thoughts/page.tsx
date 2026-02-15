import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Thoughts" };

const posts = [
  { title: "Bringing Order to Chaos: Lessons from Scaling Startups", excerpt: "What I learned leading cross-functional teams through ambiguity..." },
  { title: "The Art of Cross-Functional Leadership", excerpt: "How to bridge technical teams and business stakeholders..." },
  { title: "Why Technical PMs Need Product Thinking", excerpt: "The intersection of program management and product strategy..." },
];

export default function Thoughts() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-site mx-auto">
        <section className="pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-24">
            Thoughts.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <Reveal key={i}>
                <article className="border-t border-rule pt-8">
                  <p className="text-teal text-xs font-mono mb-5">Coming Soon</p>
                  <h2 className="text-xl font-bold tracking-tight leading-snug mb-4">{post.title}</h2>
                  <p className="text-dim text-sm leading-relaxed">{post.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
