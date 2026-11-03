import Image from "next/image";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const imageSrc = project.image ?? `/projects/${project.slug}.webp`;

  return (
    <article className="terminal-window group flex flex-col">
      <div className="terminal-header">
        <span className="terminal-dot bg-[#f85149]" />
        <span className="terminal-dot bg-[#d29922]" />
        <span className="terminal-dot bg-[#3fb950]" />
        <span className="ml-3 truncate text-xs text-muted">
          {project.slug}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-[#010409]">
        <Image
          src={imageSrc}
          alt={`Preview de ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base text-foreground md:text-lg">
            {project.title}
          </h3>
          <span className="tag text-[10px]">{project.category}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 text-xs">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-terminal"
            >
              [live ↗]
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-terminal"
            >
              [code]
            </a>
          )}
          <span className="ml-auto">
            {project.status === "live" ? (
              <span className="status-live">● live</span>
            ) : (
              <span className="status-code">○ code</span>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
