import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Form } from "@/components/form";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Let's build something that holds under pressure. Connect with Renata Aguilar for technical program management opportunities.",
  alternates: { canonical: "https://renataaguilar.company/connect" },
  openGraph: {
    title: "Connect | Renata Aguilar",
    description:
      "Let's build something that holds under pressure. Connect with Renata Aguilar for technical program management opportunities.",
    url: "https://renataaguilar.company/connect",
  },
};

export default function Connect() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <section className="pt-48 pb-32">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.15] mb-20">
            Let&apos;s build something that holds under pressure.
          </h1>

          <Reveal>
            <div className="space-y-10 text-dim text-lg leading-[1.8] mb-24">
              <p>
                If you&apos;re operating in complexity and value disciplined execution, thoughtful alignment, and structured delivery&mdash;we&apos;ll likely get along.
              </p>
              <p>
                I prefer environments where standards are high, ambiguity is real, and execution actually matters.
              </p>
              <p className="text-fg">
                I&apos;m interested in problems that require precision.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-24">
              <h2 className="sr-only">Send a Message</h2>
              <Form />
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-rule pt-12">
              <p className="text-dim text-sm mb-5">For those who prefer credentials on paper:</p>
              <a href="https://drive.google.com/file/d/1lZRJF55l5TUZn-Jp-iDqR6b4pXTWQiG0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200">
                Download Resume &rarr;
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
