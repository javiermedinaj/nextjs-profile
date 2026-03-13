import Image from "next/image";
import Link from "next/link";
import scraper from "../assets/scraper.png";
import summaryYT from "../assets/yt-summarize.png";
import ollamaOcr from "../assets/ollama-ocr.png";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

export function Works() {
  const projects = [
    {
      number: "01",
      category: "Intelligent Interface",
      title: "Summarize YT",
      description:
        "Aplicación web que utiliza IA para sintetizar contenido largo en ideas accionables. Pensada para equipos que necesitan tomar decisiones rápidas sin perder matices.",
      imageUrl: summaryYT,
      link: "https://github.com/javiermedinaj/summarize-yt",
      prod: "https://summarize-ai-yt.vercel.app/",
    },
    {
      number: "02",
      category: "Data System",
      title: "CI/CD Automation",
      description:
        "Sistema de scraping que convierte información dispersa de supermercados locales en datos estructurados, actualizados cada 24 horas mediante automatizaciones en GitHub Actions.",
      imageUrl: scraper,
      link: "https://github.com/javiermedinaj/market-scrapper",
      prod: "https://github.com/javiermedinaj/market-scrapper",
    },
    {
      number: "03",
      category: "Automation",
      title: "Ollama OCR",
      description:
        "Pipeline automatizado que transforma imágenes en datasets utilizables, combinando Llama OCR con la API de TableConvert para acelerar tareas repetitivas de captura de datos.",
      imageUrl: ollamaOcr,
      link: "https://github.com/javiermedinaj/ocr-md2csv",
      prod: "https://github.com/javiermedinaj/ocr-md2csv",
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-16 lg:mb-24">
          <div className="flex-1">
            <span className="section-label text-sm lg:text-base mb-3 block">
              WORK
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-extrabold text-foreground mt-4 leading-tight">
              Selected cases for
              <span className="block text-accent">the intelligence age</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.prod}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center group"
            >
              {/* Number & Category */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-3">
                <span className="font-display text-5xl lg:text-7xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">
                  {project.number}
                </span>
                <span className="tag text-xs lg:text-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-display text-3xl lg:text-5xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-base lg:text-lg leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-accent font-mono text-sm">
                  <span>Ver proyecto</span>
                  <HiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Image - Optional, currently commented in original */}
              {/* <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div> */}

              {/* Accent Line */}
              <div className="hidden lg:block lg:col-span-4">
                <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent group-hover:via-accent transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 lg:mt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-surface text-foreground border-2 border-accent px-10 py-5 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 font-bold text-base lg:text-lg shadow-lg hover:shadow-accent/30 hover:scale-105 transform"
          >
            Ver Todos los Proyectos
            <HiArrowDown className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
