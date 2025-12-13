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
      <section className="flex flex-col lg:grid lg:grid-cols-3 min-h-[50vh] lg:min-h-[70vh]">
        <div className="lg:col-span-2 relative bg-dark overflow-hidden min-h-[40vh] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
          <Image
            src={Bg}
            alt="Javier Medina"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Desarrollador</span>
              <span className="block">Web</span>
            </h1>
            <div className="flex gap-2 lg:gap-3 mt-3 lg:mt-4">
              <span className="tag bg-white/10 text-white border-white/20 text-xs lg:text-sm">React</span>
              <span className="tag bg-white/10 text-white border-white/20 text-xs lg:text-sm">Go</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col bg-cream">
          <div className="stat-card flex-1 py-4 lg:py-6 border-r lg:border-r-0 border-zinc-200">
            <MdOutlineWorkOutline className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-400 mb-2 lg:mb-4" />
            <span className="stat-number text-3xl lg:text-5xl">10+</span>
            <span className="stat-label text-[10px] lg:text-xs">Proyectos</span>
          </div>
          <div className="stat-card flex-1 py-4 lg:py-6 border-r lg:border-r-0 border-zinc-200">
            <MdOutlineTimer className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-400 mb-2 lg:mb-4" />
            <span className="stat-number text-3xl lg:text-5xl">1+</span>
            <span className="stat-label text-[10px] lg:text-xs">Año de Experiencia</span>
          </div>
          <div className="stat-card flex-1 py-4 lg:py-6 border-b-0">
            <MdCode className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-400 mb-2 lg:mb-4" />
            <span className="stat-number text-3xl lg:text-5xl">5+</span>
            <span className="stat-label text-[10px] lg:text-xs">Tecnologías</span>
          </div>
        </div>
      </section>

      <div className="bg-cream border-y border-zinc-200 py-2 lg:py-3 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          <span className="mx-4 lg:mx-8 text-xs lg:text-sm text-zinc-500">Disponible para trabajos freelance</span>
          <span className="text-zinc-300">•</span>
          <span className="mx-4 lg:mx-8 text-xs lg:text-sm text-zinc-500">Argentina</span>
          <span className="text-zinc-300">•</span>
          <span className="mx-4 lg:mx-8 text-xs lg:text-sm text-zinc-500">Especializado en Desarrollo Web</span>
          <span className="text-zinc-300">•</span>
          <span className="mx-4 lg:mx-8 text-xs lg:text-sm text-zinc-500">Disponible para trabajos freelance</span>
          <span className="text-zinc-300">•</span>

          <span className="text-zinc-300">•</span>
          <span className="mx-4 lg:mx-8 text-xs lg:text-sm text-zinc-500">Especializado en Desarrollo Web</span>
          <span className="text-zinc-300">•</span>
        </div>
      </div>

      <section id="about" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-light text-dark">
              <span className="inline-flex items-center gap-4">
                Code
                <MdCode className="w-12 h-12 text-zinc-400" />
                Driven
              </span>
            </h2>
            <h2 className="text-5xl md:text-8xl font-light text-dark mt-2">Development</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="section-label mb-6">Competencias Principales</h3>
              <div className="space-y-4">
                {["Desarrollo Frontend", "Backend con Go", "Web Scraping y Automatización"].map((skill) => (
                  <div key={skill} className="flex items-center justify-between py-3 border-b border-zinc-100 group cursor-pointer">
                    <span className="text-dark">{skill}</span>
                    <HiArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ScrollColorText className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                Construyo experiencias digitales que combinan <span className="text-zinc-400">código limpio con diseño funcional.</span> Mi trabajo se enfoca en crear aplicaciones eficientes y escalables con atención al detalle.
              </ScrollColorText>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/javiermedinaj"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  Ver GitHub
                  <TbArrowUpRight className="w-4 h-4" />
                </Link>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
