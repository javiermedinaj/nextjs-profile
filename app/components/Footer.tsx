import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export function Footer() {
  return (
    <footer className="bg-dark py-4 mt-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
      <div className="container mx-auto px-4 text-center">
        <a
          href="https://www.linkedin.com/in/javiermedinaj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 inline-block text-white" />
        </a>

        <a
          href="https://github.com/javiermedinaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 inline-block text-white ml-4" />
        </a>
        <a href="mailto:javier_j_medina@hotmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail className="w-6 h-6 inline-block text-white ml-4" />
        </a>
      </div>
    </footer>
  );
}
