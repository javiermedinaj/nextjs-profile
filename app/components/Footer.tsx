import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/javiermedinaj/",
    label: "LinkedIn"
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/javiermedinaj",
    label: "GitHub"
  },
  {
    icon: <MdOutlineEmail />,
    href: "mailto:javier_j_medina@hotmail.com",
    label: "Email"
  }
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold text-center">Let's Connect</h2>
          
          <p className="text-gray-400 max-w-md text-center">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}