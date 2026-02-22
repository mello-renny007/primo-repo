"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function Form() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpqjylrw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10" role="status">
        <p className="text-fg text-xl mb-2">Thanks!</p>
        <p className="text-dim">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} action="https://formspree.io/f/xpqjylrw" method="POST">
      <fieldset className="space-y-10 border-0 p-0 m-0" disabled={status === "submitting"}>
        <legend className="sr-only">Contact form</legend>
        <div>
          <label htmlFor="name" className="block text-dim text-xs uppercase tracking-[0.15em] mb-3">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name"
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-fg focus:outline-none transition-colors duration-200 disabled:opacity-50" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-dim text-xs uppercase tracking-[0.15em] mb-3">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email"
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-fg focus:outline-none transition-colors duration-200 disabled:opacity-50" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-dim text-xs uppercase tracking-[0.15em] mb-3">Message</label>
          <textarea id="message" name="message" required rows={4}
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-fg focus:outline-none transition-colors duration-200 resize-none disabled:opacity-50" placeholder="What's on your mind?" />
        </div>
        {status === "error" && (
          <p className="text-red-400 text-sm" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
        <button type="submit" className="border border-accent text-fg text-sm tracking-[0.06em] px-7 py-3 hover:border-fg transition-colors duration-200 disabled:opacity-50">
          {status === "submitting" ? "Sending..." : "Send Message"} &rarr;
        </button>
      </fieldset>
    </form>
  );
}
