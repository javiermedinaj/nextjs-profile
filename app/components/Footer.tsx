import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

const socialLinks = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/javiermedinaj/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/javiermedinaj",
    label: "GitHub",
  },
  {
    icon: <MdOutlineEmail className="w-5 h-5" />,
    href: "mailto:javier_j_medina@hotmail.com",
    label: "Email",
  },
];

const sitemapLinks = [
  { label: "Trabajos", href: "#work" },
  { label: "Lecturas", href: "#writing" },
  { label: "Acerca de", href: "#about" },
  { label: "Contacto", href: "mailto:javier_j_medina@hotmail.com" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-background text-foreground border-t border-border"
    >
      {/* CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center border-b border-border">
        <div className="max-w-4xl mx-auto">
          <span className="section-label text-sm lg:text-base mb-6 block">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight">
            Creemos algo{" "}
            <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              increíble
            </span>
          </h2>
          <p className="text-muted text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a
            hacerlo realidad.
          </p>
          <Link
            href="mailto:javier_j_medina@hotmail.com"
            className="inline-flex items-center gap-3 bg-accent text-dark px-10 py-5 rounded-full hover:bg-accent-soft transition-all duration-300 font-bold text-base lg:text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transform"
          >
            Comenzar un Proyecto
            <HiArrowTopRightOnSquare className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-soft rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-dark text-sm font-black">JM</span>
              </div>
              <span className="font-display font-bold text-foreground text-xl tracking-tight">
                JAVIER.DEV
              </span>
            </div>
            <p className="text-muted text-base leading-relaxed max-w-md mb-6">
              Desarrollador web enfocado en React, Go y herramientas de
              automatización. Construyendo experiencias digitales con código
              limpio y diseño funcional.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110 transform"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="section-label text-xs lg:text-sm mb-6">
              Mapa del Sitio
            </h4>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors text-sm lg:text-base font-medium relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="section-label text-xs lg:text-sm mb-6">
              Redes Sociales
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm lg:text-base font-medium group"
                  >
                    {link.label}
                    <HiArrowTopRightOnSquare className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
