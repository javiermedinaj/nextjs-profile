import Image from "next/image";
import Link from "next/link";
import scraper from "../assets/scraper.png";
import summaryYT from "../assets/yt-summarize.png";
import ollamaOcr from "../assets/ollama-ocr.png";

export function Works() {
  const projects = [
     {
      title: "Resumir YT",
      description:
        "Aplicación web que utiliza IA para generar resúmenes y prompts concisos de videos de YouTube",
      imageUrl: summaryYT,
      link: "https://github.com/javiermedinaj/summarize-yt",
      prod:"https://summarize-ai-yt.vercel.app/"
    },
    {
      title: "Scraper de Ofertas",
      description:
        "Web scraper que recopila ofertas de supermercados locales. Se actualiza cada 24 horas mediante GitHub Actions",
      imageUrl: scraper,
      link: "https://github.com/javiermedinaj/market-scrapper",
      prod:"https://offers-ba.vercel.app/"
    },
    {
      title: "Ollama OCR",
      description:
        "Automatiza la conversión de datos de imágenes a formato CSV utilizando Llama OCR y la API de TableConvert.",
      imageUrl: ollamaOcr,
      link: "https://github.com/javiermedinaj/ocr-md2csv",
      prod:"https://ollama.com/models/llama-ocr"
    },
   
    
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-12xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center ">
          Proyectos
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Disfruto creando proyectos que resuelven problemas reales, desarrollando aplicaciones del lado del cliente con React y del servidor con Go. 
          También me apasiona automatizar tareas mediante web scraping y herramientas como N8N.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <Link
                    href={project.link}
                    {...(project.link.startsWith("/")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="group"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Ver en GitHub
                </Link>
                <Link
                  href={project.prod}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-900 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Ver Demo
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            También me gusta crear templates de frontend utilizando diferentes librerías de animación, 
            como GSAP, Lenis y Framer Motion.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Ver Templates
          </Link>
        </div>
      </div>
    </section>
  );
}
