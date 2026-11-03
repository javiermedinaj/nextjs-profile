import Link from "next/link";
import { TerminalWindow } from "./TerminalWindow";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "../data/projects";

export function Works() {
  return (
    <section id="work">
      <TerminalWindow title="~/projects">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">ls -la ~/projects</span>
        </div>

        <p className="output mb-6 text-xs">
          total {featuredProjects.length} · proyectos seleccionados
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-4 text-sm">
          <Link href="/projects" className="link-terminal">
            $ cat all-projects.json →
          </Link>
        </div>
      </TerminalWindow>
    </section>
  );
}
