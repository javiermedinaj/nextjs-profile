"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#work", label: "work" },
  { href: "/#cloud", label: "cloud" },
  { href: "/#skills", label: "skills" },
  { href: "/#writing", label: "notes" },
  { href: "/projects", label: "projects" },
  { href: "/#contact", label: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0d1117]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-sm">
          <span className="text-terminal-green">$</span>
          <span className="text-foreground">~/javier</span>
          <span className="terminal-dot ml-1 bg-terminal-green animate-pulse" />
        </Link>

        <nav className="hidden items-center gap-5 text-xs text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-xs text-muted transition-colors hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-terminal-green">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
