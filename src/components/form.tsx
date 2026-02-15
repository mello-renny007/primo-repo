"use client";

import { useState, type FormEvent } from "react";

export function Form() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="py-10" role="status">
        <p className="text-xl font-medium mb-2">Thanks for reaching out.</p>
        <p className="text-dim">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="space-y-8 border-0 p-0 m-0">
        <legend className="sr-only">Contact form</legend>
        <div>
          <label htmlFor="name" className="block text-faint text-xs uppercase tracking-[0.15em] mb-3">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name"
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-teal focus:outline-none transition-colors" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-faint text-xs uppercase tracking-[0.15em] mb-3">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email"
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-teal focus:outline-none transition-colors" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-faint text-xs uppercase tracking-[0.15em] mb-3">Message</label>
          <textarea id="message" name="message" required rows={4}
            className="w-full bg-transparent border-b border-rule pb-3 text-fg text-lg placeholder:text-faint/40 focus:border-teal focus:outline-none transition-colors resize-none" placeholder="What's on your mind?" />
        </div>
        <button type="submit" className="bg-teal hover:bg-teal/80 text-bg font-medium text-sm tracking-wide px-8 py-3 rounded-full transition-colors">
          Send Message
        </button>
      </fieldset>
    </form>
  );
}
