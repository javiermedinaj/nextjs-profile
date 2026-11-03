import { TerminalWindow } from "./TerminalWindow";

const AWS_SERVICES = [
  {
    name: "S3",
    command: "aws s3 ls",
    description: "Assets estáticos, backups y almacenamiento de datos.",
    items: ["Hosting de imágenes", "Backups automáticos", "Versionado"],
  },
  {
    name: "EC2",
    command: "aws ec2 describe-instances",
    description: "Instancias Linux para apps, Nginx y despliegues.",
    items: ["Ubuntu / Nginx", "SSL con Let's Encrypt", "Docker"],
  },
  {
    name: "Lambda",
    command: "aws lambda list-functions",
    description: "Funciones serverless para tareas y jobs puntuales.",
    items: ["APIs event-driven", "Scraping programado", "Webhooks"],
  },
  {
    name: "Bedrock",
    command: "aws bedrock list-foundation-models",
    description: "Modelos fundacionales para features de IA.",
    items: ["Prompts y agentes", "Resúmenes", "Clasificación"],
  },
];

export function Cloud() {
  return (
    <section id="cloud">
      <TerminalWindow title="~/cloud/aws">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">aws --version</span>
        </div>
        <p className="output mb-1 text-xs">aws-cli/2.x · linux · x86_64</p>
        <p className="output mb-6 text-xs">
          # servicios que uso para desplegar, automatizar y conectar IA
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {AWS_SERVICES.map((service) => (
            <div
              key={service.name}
              className="rounded-lg border border-border bg-[#0d1117] p-4 transition-colors hover:border-accent/60"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg text-foreground">{service.name}</h3>
                <span className="tag text-[10px]">aws</span>
              </div>
              <p className="mt-1 text-xs text-accent">$ {service.command}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-muted">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-terminal-green">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 border-t border-border pt-4 text-xs text-muted">
          <span className="text-terminal-green">$</span> aws s3 ls → assets ·
          backups · media
        </p>
      </TerminalWindow>
    </section>
  );
}
