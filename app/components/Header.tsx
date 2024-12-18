import Link from "next/link";
import logo from "../assets/j-removebg-preview.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-dark/80 border-b border-zinc-800">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-14 w-14" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="mailto:javier_j_medina@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              Email
            </Link>
          </li>
          <span className="text-gray-500"> · </span>
          <li>
            <Link
              href="https://github.com/javiermedinaj/nextjs-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
