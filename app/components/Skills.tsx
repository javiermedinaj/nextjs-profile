import { TerminalWindow } from "./TerminalWindow";

const SKILLS = [
  {
    title: "frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Framer Motion",
    ],
  },
  {
    title: "backend",
    items: [
      "Node.js",
      "Go",
      "APIs REST",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    title: "cloud / aws",
    items: [
      "S3",
      "EC2",
      "Lambda",
      "Bedrock",
      "Vercel",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    title: "ai / automation",
    items: [
      "Azure OpenAI",
      "Groq",
      "Llama OCR",
      "Scraping",
      "CI/CD",
      "Prompts",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <TerminalWindow title="~/skills">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">which stack</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm text-accent">
                <span className="text-terminal-green">›</span> {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
