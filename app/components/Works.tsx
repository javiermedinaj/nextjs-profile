import Image from "next/image";
import Link from "next/link";
import scraper from "../assets/scraper.png";
import summaryYT from "../assets/yt-summarize.png";
import ollamaOcr from "../assets/ollama-ocr.png";
import { HiArrowDown } from "react-icons/hi2";

export function Works() {
  const projects = [
    {
      number: "01",
      category: "AI Tool",
      title: "Resumir YT",
      description:
        "Aplicación web que utiliza IA para generar resúmenes y prompts concisos de videos de YouTube",
      imageUrl: summaryYT,
      link: "https://github.com/javiermedinaj/summarize-yt",
      prod: "https://summarize-ai-yt.vercel.app/"
    },
    {
      number: "02",
      category: "Web Scraping",
      title: "Scraper de Ofertas",
      description:
        "Web scraper que recopila ofertas de supermercados locales. Se actualiza cada 24 horas mediante GitHub Actions",
      imageUrl: scraper,
      link: "https://github.com/javiermedinaj/market-scrapper",
      prod: "https://offers-ba.vercel.app/"
    },
    {
      number: "03",
      category: "Automation",
      title: "Ollama OCR",
      description:
        "Automatiza la conversión de datos de imágenes a formato CSV utilizando Llama OCR y la API de TableConvert.",
      imageUrl: ollamaOcr,
      link: "https://github.com/javiermedinaj/ocr-md2csv",
      prod: "https://ollama.com/models/llama-ocr"
    },
  ];

  return (
    <section id="work" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="section-label">01 / Trabajos Seleccionados</span>
            <h2 className="text-3xl font-medium text-dark mt-2">Casos</h2>
          </div>
          <HiArrowDown className="w-8 h-8 text-zinc-400" />
        </div>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.prod}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card grid grid-cols-1 lg:grid-cols-3 gap-8 items-center group"
            >
              {/* Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-zinc-400 font-mono">&quot;{project.number}&quot;</span>
                  <span className="tag">{project.category}</span>
                </div>
                <h3 className="text-2xl font-medium text-dark mb-3 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image */}
              {/* <div className="lg:col-span-2 relative overflow-hidden rounded-xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div> */}
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center bg-black gap-2 border border-zinc-300 text-white px-8 py-3 rounded-full hover:bg-zinc-900 transition-colors"
          >
            Ver Todos los Proyectos
            <HiArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
