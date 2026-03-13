import Image from "next/image";
// import Me from "../assets/me.jpg";
import Link from "next/link";
import Bg from "../assets/bg.png";
import { ScrollColorText } from "./ScrollColorText";
import { MdOutlineWorkOutline, MdOutlineTimer, MdCode } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";
import { TbArrowUpRight } from "react-icons/tb";

export function Profile() {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[80vh] border-b border-border bg-background">
        {/* Hero Copy */}
        <div className="flex-1 px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center gap-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs lg:text-sm font-mono font-bold bg-accent/10 text-accent border border-accent/30 rounded-full">
              INDEPENDENT DEVELOPER FOR THE INTELLIGENCE AGE
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block">I design and build</span>
            <span className="block text-accent">intelligent digital systems</span>
          </h1>
          <p className="text-base lg:text-lg text-muted max-w-xl leading-relaxed">
            Soy Javier Medina, desarrollador web que une estrategia, diseño y código
            para crear productos claros, escalables y listos para marcas que operan
            en la nueva era de la inteligencia.
          </p>
          <div className="flex flex-wrap gap-3 text-xs lg:text-sm font-mono uppercase tracking-wide">
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
            <span className="tag">Go</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Automation</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="flex-1 relative border-t lg:border-t-0 lg:border-l border-border bg-surface flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0">
          <div className="absolute inset-6 border border-dashed border-border/80 pointer-events-none" />
          <div className="relative z-10 max-w-md space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              PROFILE SNAPSHOT
            </p>
            <Image
              src={Bg}
              alt="Visual abstracto de Javier Medina"
              className="rounded-2xl object-cover w-full h-56 lg:h-72"
            />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                  LOCATION
                </p>
                <p className="font-medium">Buenos Aires, AR</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                  FOCUS
                </p>
                <p className="font-medium">Frontend & Automation</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                  STATUS
                </p>
                <p className="font-medium text-accent">Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-row lg:flex-col bg-surface border-l border-border">
          <div className="stat-card flex-1 py-6 lg:py-8 border-r lg:border-r-0 stagger-item">
            <MdOutlineWorkOutline className="w-7 h-7 lg:w-10 lg:h-10 text-accent mb-3 lg:mb-4" />
            <span className="stat-number text-4xl lg:text-6xl">10+</span>
            <span className="stat-label text-[10px] lg:text-xs">Proyectos</span>
          </div>
          <div className="stat-card flex-1 py-6 lg:py-8 border-r lg:border-r-0 stagger-item">
            <MdOutlineTimer className="w-7 h-7 lg:w-10 lg:h-10 text-accent mb-3 lg:mb-4" />
            <span className="stat-number text-4xl lg:text-6xl">1+</span>
            <span className="stat-label text-[10px] lg:text-xs">
              Año de Experiencia
            </span>
          </div>
          <div className="stat-card flex-1 py-6 lg:py-8 border-b-0 stagger-item">
            <MdCode className="w-7 h-7 lg:w-10 lg:h-10 text-accent mb-3 lg:mb-4" />
            <span className="stat-number text-4xl lg:text-6xl">5+</span>
            <span className="stat-label text-[10px] lg:text-xs">
              Tecnologías
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-surface border-y border-border py-3 lg:py-4 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          <span className="mx-6 lg:mx-10 text-xs lg:text-sm text-muted font-mono">
            Disponible para trabajos freelance
          </span>

          <span className="text-accent">●</span>
          <span className="mx-6 lg:mx-10 text-xs lg:text-sm text-muted font-mono">
            Especializado en Desarrollo Web
          </span>
          <span className="text-accent">●</span>
          <span className="mx-6 lg:mx-10 text-xs lg:text-sm text-muted font-mono">
            Disponible para trabajos freelance
          </span>

          <span className="text-accent">●</span>
          <span className="mx-6 lg:mx-10 text-xs lg:text-sm text-muted font-mono">
            Especializado en Desarrollo Web
          </span>
          <span className="text-accent">●</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold text-foreground tracking-tight leading-none">
              <span className="inline-flex items-center gap-4 lg:gap-6">
                Code
                <MdCode className="w-10 h-10 lg:w-16 lg:h-16 text-accent" />
                Driven
              </span>
            </h2>
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold mt-2 lg:mt-4">
              <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                Development
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Skills Card */}
            <div className="bg-surface rounded-3xl p-8 lg:p-10 shadow-2xl border border-border relative overflow-hidden stagger-item">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
              <h3 className="section-label mb-8">Competencias Principales</h3>
              <div className="space-y-1">
                {[
                  "Desarrollo Frontend",
                  "Backend con Go",
                  "Web Scraping y Automatización",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between py-5 border-b border-border/50 group cursor-pointer transition-all duration-300 hover:border-accent/30"
                  >
                    <span className="text-foreground text-base lg:text-lg font-medium group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                    <HiArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-8 lg:space-y-10 stagger-item">
              <ScrollColorText className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-zinc-300">
                Construyo experiencias digitales que combinan{" "}
                <span className="text-accent font-bold">código limpio</span> con{" "}
                <span className="text-accent font-bold">diseño funcional.</span>{" "}
                Mi trabajo se enfoca en crear aplicaciones{" "}
                <span className="text-accent-soft">
                  eficientes y escalables
                </span>{" "}
                con atención al detalle.
              </ScrollColorText>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/javiermedinaj"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-accent text-dark px-8 py-4 rounded-full hover:bg-accent-soft transition-all duration-300 font-bold text-sm lg:text-base shadow-lg hover:shadow-accent/20 hover:scale-105 transform"
                >
                  Ver GitHub
                  <TbArrowUpRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-3 bg-surface text-foreground border-2 border-border px-8 py-4 rounded-full hover:border-accent transition-all duration-300 font-bold text-sm lg:text-base hover:scale-105 transform"
                >
                  Ver Proyectos
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
