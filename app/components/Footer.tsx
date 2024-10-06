import { FaLinkedin } from "react-icons/fa";;
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
      <footer className="bg-dark py-4 mt-8">
        <div className="container mx-auto px-4 text-center ">
          <FaLinkedin className="w-6 h-6 inline-block text-white" />
          <FaInstagram className="w-6 h-6 inline-block text-white ml-4" />
          <FaGithub className="w-6 h-6 inline-block text-white ml-4" />
        </div>
      </footer>
    )
  }