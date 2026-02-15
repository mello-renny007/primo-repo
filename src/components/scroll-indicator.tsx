"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 100);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 select-none pointer-events-none transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <span className="text-faint text-[10px] tracking-[0.25em] uppercase">
        Scroll
      </span>
      <span className="text-teal animate-bounce">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v10M3 8l5 5 5-5" />
        </svg>
      </span>
    </div>
  );
}
