import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "From military aspirations to Technical Program Management - how structure, discipline, and systems thinking shaped my career path.",
  alternates: { canonical: "https://renataaguilar.company/journey" },
  openGraph: {
    title: "The Journey | Renata Aguilar",
    description:
      "From military aspirations to Technical Program Management - how structure, discipline, and systems thinking shaped my career path.",
    url: "https://renataaguilar.company/journey",
  },
};

export default function Journey() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <section className="pt-48 pb-32">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] mb-24">
            The Journey.
          </h1>

          <Reveal>
            <div className="space-y-10 text-dim text-lg leading-[1.8]">
              <p>I once believed my path would lead to the military.</p>

              <p>
                I was drawn to structure, discipline, and operating inside systems where precision matters. Life unfolded differently&mdash;but that instinct never left.
              </p>

              <p>
                I began my career in Quality Assurance, learning how systems break. How small oversights compound. How discipline protects integrity. That foundation shaped how I operate today.
              </p>

              <p>
                Over time, I moved into project leadership and eventually Technical Program Management&mdash;not out of ambition for titles, but because I naturally gravitated toward alignment.
              </p>

              <div>
                <p>When delivery became fragmented, I introduced structure.</p>
                <p>When roadmaps drifted, I restored clarity.</p>
                <p>When ambiguity stalled progress, I created visibility.</p>
              </div>

              <p>
                Most of my career has unfolded inside high-growth environments where complexity is constant and playbooks don&apos;t exist. That sharpened me.
              </p>

              <div>
                <p>It taught me to build structure without rigidity.</p>
                <p>To shield engineers from unnecessary noise.</p>
                <p>To maintain composure under shifting constraints.</p>
              </div>

              <p className="text-fg">
                Across identity platforms, enterprise authentication systems, SaaS launches, and decentralized credential pilots, the pattern has remained consistent: I stabilize complexity without adding friction.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24">
              <Link href="/thinking" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                How I Think &rarr;
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
