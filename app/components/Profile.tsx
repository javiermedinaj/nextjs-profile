import Link from "next/link";
import { TerminalWindow } from "./TerminalWindow";
import { TerminalTyping } from "./TerminalTyping";

const ASCII_BANNER = `     ██╗ █████╗ ██╗   ██╗██╗███████╗██████╗
     ██║██╔══██╗██║   ██║██║██╔════╝██╔══██╗
     ██║███████║██║   ██║██║█████╗  ██████╔╝
██   ██║██╔══██║╚██╗ ██╔╝██║██╔══╝  ██╔══██╗
╚█████╔╝██║  ██║ ╚████╔╝ ██║███████╗██║  ██║
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝╚═╝  ╚═╝`;

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Go",
  "AWS",
  "Bedrock",
];

export function Profile() {
  return (
    <section id="home" className="space-y-6">
      <TerminalWindow title="javier@portfolio: ~">
        <div className="command-line">
          <span className="prompt">$</span>
          <TerminalTyping />
        </div>

        <pre className="ascii-art">{ASCII_BANNER}</pre>

        <div className="mt-6 space-y-3">
          <p className="text-base text-accent md:text-lg">
            Frontend &amp; Cloud Developer
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Soy Javier Medina. Construyo interfaces, APIs y automatizaciones con
            React, Next.js, Go y servicios de AWS. Me interesa unir producto,
            performance e inteligencia artificial en sistemas que se sientan
            simples por fuera y sólidos por dentro.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {STACK.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-border pt-6 text-sm md:grid-cols-2">
          <div className="space-y-2">
            <p>
              <span className="text-accent">role</span>
              <span className="text-muted"> ........... </span>
              Frontend &amp; Cloud Developer
            </p>
            <p>
              <span className="text-accent">location</span>
              <span className="text-muted"> ....... </span>
              Buenos Aires, AR
            </p>
            <p>
              <span className="text-accent">cloud</span>
              <span className="text-muted"> .......... </span>
              AWS · S3 · EC2 · Lambda · Bedrock
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="text-accent">stack</span>
              <span className="text-muted"> .......... </span>
              React · Next · Go · TypeScript
            </p>
            <p>
              <span className="text-accent">focus</span>
              <span className="text-muted"> .......... </span>
              Web · AI · Automation
            </p>
            <p>
              <span className="text-accent">status</span>
              <span className="text-muted"> ......... </span>
              <span className="status-live">● available</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6 text-sm">
          <Link href="/#work" className="link-terminal">
            ./ver-proyectos
          </Link>
          <span className="text-muted">|</span>
          <a
            href="https://github.com/javiermedinaj"
            target="_blank"
            rel="noopener noreferrer"
            className="link-terminal"
          >
            github ↗
          </a>
          <span className="text-muted">|</span>
          <a
            href="mailto:javier_j_medina@hotmail.com"
            className="link-terminal"
          >
            contactar ↗
          </a>
        </div>
      </TerminalWindow>
    </section>
  );
}
