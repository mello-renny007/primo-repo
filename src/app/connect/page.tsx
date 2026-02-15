import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Form } from "@/components/form";

export const metadata: Metadata = { title: "Connect" };

export default function Connect() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-site mx-auto">
        <section className="pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
            Let&apos;s Talk.
          </h1>
          <p className="text-dim text-lg mb-24 max-w-md">
            Always open to interesting conversations and new opportunities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal>
              <address className="space-y-10 not-italic">
                <h2 className="sr-only">Contact Information</h2>
                <div>
                  <p className="text-faint text-xs uppercase tracking-[0.15em] mb-2">Email</p>
                  <a href="mailto:renata.aguilar007@gmail.com" className="text-fg text-lg hover:text-teal transition-colors">
                    renata.aguilar007@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-faint text-xs uppercase tracking-[0.15em] mb-2">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/renata-aguilar-5382954b" target="_blank" rel="noopener noreferrer" className="text-fg text-lg hover:text-teal transition-colors">
                    Renata Aguilar
                  </a>
                </div>
                <div>
                  <p className="text-faint text-xs uppercase tracking-[0.15em] mb-2">Location</p>
                  <p className="text-fg text-lg">Houston, Texas</p>
                </div>
              </address>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="sr-only">Send a Message</h2>
                <Form />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
