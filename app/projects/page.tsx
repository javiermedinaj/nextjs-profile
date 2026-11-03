import Link from "next/link";
import { TerminalWindow } from "../components/TerminalWindow";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <Link href="/" className="text-xs text-muted hover:text-accent">
        cd ~
      </Link>

      <TerminalWindow title="~/projects --all" className="mt-4">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">cat all-projects.json</span>
        </div>
        <p className="output mb-6 text-xs">
          {projects.length} proyectos · frontend, cloud, IA y automatización
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
