import Link from "next/link";


export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-zinc-200">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex md:hidden justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-dark rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">JM</span>
            </div>
            <span className="font-medium text-dark text-sm">JAVIER.DEV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#work" className="text-xs text-zinc-600 hover:text-dark transition-colors">
              Trabajos
            </Link>
            <Link href="/#about" className="text-xs text-zinc-600 hover:text-dark transition-colors">
              Acerca de
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/#work" className="text-sm text-zinc-600 hover:text-dark transition-colors">
              Trabajos
            </Link>
            <Link href="/#writing" className="text-sm text-zinc-600 hover:text-dark transition-colors">
              Escritos
            </Link>
          </div>
          
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-dark rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">JM</span>
            </div>
            <span className="font-medium text-dark">JAVIER.DEV</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/#about" className="text-sm text-zinc-600 hover:text-dark transition-colors">
              Acerca de
            </Link>
            <Link 
              href="/#footer" 
              className="text-sm text-zinc-600 hover:text-dark transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
