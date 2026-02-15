import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Voices" };

const testimonials = [
  {
    quote: "I had the pleasure of working with Renata at SpruceID, where she managed customer relationships and implementations with professionalism, warmth, and integrity. She has the ability to build trust quickly, both with clients and across internal teams. She is one of the most reliable and empathetic colleagues I\u2019ve worked with.",
    name: "Parke Hunter",
    role: "Marketing at SpruceID",
  },
  {
    quote: "The first thing that comes to mind is how well she did at bringing order to chaos. She proved to be very effective in gathering people together, documenting shortcomings and next steps, organizing the data, and distilling this information for our C-suite to consume. She worked wonders with our release process\u2014smooth as silk.",
    name: "Joseph (Sal) Rizzari",
    role: "Engineering Leader at HYPR",
  },
  {
    quote: "Renata is an enthusiastic and self-driven professional who has added value to our team since day one. As project leader she has excelled in customer relationship, team motivation, product quality and accountability. She goes beyond her responsibilities to propose initiatives that improve her teammates\u2019 performance.",
    name: "Juan Fernando Vergez",
    role: "CEO",
  },
];

export default function Voices() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <section className="pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-24">
            What People Say.
          </h1>

          <div className="space-y-0">
            {testimonials.map((t, i) => (
              <Reveal key={i}>
                <figure className="border-t border-rule py-16 md:py-20">
                  <blockquote>
                    <p className="text-xl md:text-2xl leading-[1.6] tracking-tight text-fg font-light">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-8">
                    <cite className="not-italic">
                      <span className="text-fg font-medium">{t.name}</span>
                      {t.role && (
                        <span className="text-dim text-sm ml-2">&mdash; {t.role}</span>
                      )}
                    </cite>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
