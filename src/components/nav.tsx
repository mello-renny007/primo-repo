"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/journey", label: "The Journey" },
  { href: "/thinking", label: "How I Think" },
  { href: "/work", label: "The Work" },
  { href: "/connect", label: "Connect" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
    return () => { document.body.style.removeProperty("overflow"); };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="absolute inset-0 bg-bg/85 backdrop-blur-sm pointer-events-none" />

        <Link href="/" className="relative z-10 group" aria-label="Home">
          <span className="text-fg text-base md:text-lg font-semibold tracking-tight">Renata Aguilar</span>
          <span className="hidden md:block text-dim text-[11px] tracking-[0.08em] mt-0.5">
            Technical Program Manager | Identity, Security &amp; Scalable Systems
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block relative z-10">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-[0.06em] pb-0.5 border-b transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-fg border-accent"
                      : "text-dim border-transparent hover:border-accent"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="relative z-10 w-8 h-8 flex md:hidden flex-col justify-center items-center gap-[5px]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-px bg-fg transition-transform duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-fg transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-bg flex items-center justify-center md:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <nav>
            <ul className="space-y-6 text-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`text-2xl tracking-wide transition-colors duration-200 ${
                      pathname === link.href ? "text-fg" : "text-dim"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
