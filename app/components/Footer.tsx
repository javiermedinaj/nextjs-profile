import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

const socialLinks = [
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    href: "https://www.linkedin.com/in/javiermedinaj/",
    label: "LinkedIn"
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    href: "https://github.com/javiermedinaj",
    label: "GitHub"
  },
  {
    icon: <MdOutlineEmail className="w-4 h-4" />,
    href: "mailto:javier_j_medina@hotmail.com",
    label: "Email"
  }
];

const sitemapLinks = [
  { label: "Trabajos", href: "#work" },
  { label: "Lecturas", href: "#writing" },
  { label: "Acerca de", href: "#about" },
  { label: "Contacto", href: "mailto:javier_j_medina@hotmail.com" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white">
      <div className="container mx-auto px-6 py-20 text-center border-b border-zinc-800">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Creemos algo
        </h2>
        <Link 
          href="mailto:javier_j_medina@hotmail.com"
          className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors font-medium"
        >
          Comenzar un Proyecto
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-dark text-xs font-bold">JM</span>
              </div>
              <span className="font-medium">JAVIER.DEV</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Desarrollador web enfocado en React, Go y herramientas de automatización.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-zinc-500 uppercase mb-4">Mapa del Sitio</h4>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-zinc-500 uppercase mb-4">Redes Sociales</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group"
                  >
                    {link.label}
                    <HiArrowTopRightOnSquare className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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