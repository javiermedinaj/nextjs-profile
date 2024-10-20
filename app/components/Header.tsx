import Link from 'next/link';
import logo from '../assets/j-removebg-preview.png';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-dark py-2">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-14 w-14" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="#" className="text-gray-500 hover:text-white">Email</Link></li>
          <span className='text-gray-500'> · </span>
          <li><Link href="#" className="text-gray-500 hover:text-white">GitHub</Link></li>
        </ul>
      </nav>
    </header>
  );
}