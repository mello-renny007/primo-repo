"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who I Am" },
  { href: "/work", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/voices", label: "Voices" },
  { href: "/thoughts", label: "Thoughts" },
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
    return () => document.body.style.removeProperty("overflow");
  }, [open]);

  return (
    <>
      {/* Fixed bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12">
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm pointer-events-none" />

        <Link href="/" className="relative z-10 text-fg text-xl font-bold tracking-tight hover:opacity-70 transition-opacity" aria-label="Home">
          RA
        </Link>

        <button
          onClick={() => setOpen(v => !v)}
          className="relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-px bg-fg transition-transform duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-fg transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-bg flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Navigation">
          <nav>
            <ul className="space-y-5 text-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`text-3xl md:text-4xl font-medium tracking-tight transition-colors ${
                      pathname === link.href ? "text-teal" : "text-fg hover:text-teal"
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
