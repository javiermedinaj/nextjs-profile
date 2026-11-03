import Link from "next/link";
import { ContactForm } from "./ContactForm";

const LINKS = [
  { label: "GitHub", href: "https://github.com/javiermedinaj" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/javiermedinaj/" },
  { label: "Email", href: "mailto:javier_j_medina@hotmail.com" },
];

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-xl text-foreground md:text-2xl">Contacto</h2>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              ¿Tenés un proyecto en mente o querés charlar sobre frontend,
              cloud o IA? Escribime.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <ContactForm />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <span>© 2026 Javier Medina</span>
        <Link href="/" className="transition-colors hover:text-accent">
          Volver arriba ↑
        </Link>
      </div>
    </footer>
  );
}
