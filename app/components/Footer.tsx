import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-dark py-4 mt-8">
      <h4 className="text-1xl font-bold mb-4 text-center text-gray-500">Follow me</h4>
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
      </div>
    </footer>
  );
}
