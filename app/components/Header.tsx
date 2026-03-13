import Link from "next/link";


export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        {/* Mobile Nav */}
        <div className="flex md:hidden justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent-soft rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-all group-hover:scale-110">
              <span className="text-dark text-xs font-black">JM</span>
            </div>
            <span className="font-display font-bold text-foreground text-sm tracking-tight">JAVIER.DEV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#work" className="text-xs text-muted hover:text-accent transition-colors font-mono font-bold">
              Work
            </Link>
            <Link href="/#about" className="text-xs text-muted hover:text-accent transition-colors font-mono font-bold">
              About
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/#work" 
              className="text-sm text-muted hover:text-accent transition-all duration-300 font-medium relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/#writing" 
              className="text-sm text-muted hover:text-accent transition-all duration-300 font-medium relative group"
            >
              Journal
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {/* Center Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-soft rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-all group-hover:scale-110 group-hover:rotate-3">
              <span className="text-dark text-xs font-black">JM</span>
            </div>
            <span className="font-display font-bold text-foreground tracking-tight text-base">JAVIER.DEV</span>
          </Link>

          {/* Right Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/#about" 
              className="text-sm text-muted hover:text-accent transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/#footer" 
              className="text-sm bg-accent text-dark px-5 py-2 rounded-full hover:bg-accent-soft transition-all duration-300 font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
