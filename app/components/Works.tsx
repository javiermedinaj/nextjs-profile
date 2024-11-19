import Image from "next/image";
import Link from "next/link";
import scraper from "../assets/scraper.png";
import summaryYT from "../assets/yt-summarize.png";
import ollamaOcr from "../assets/ollama-ocr.png";

export function Works() {
  const projects = [
    {
      title: "Ollama OCR",
      description:
        "Automates the conversion of image data into CSV format using Llama OCR and TableConvert API.",
      imageUrl: ollamaOcr,
      link: "https://github.com/javiermedinaj/ocr-md2csv",
    },
    {
      title: "Summarize YT",
      description:
        "A web application that leverages AI to generate concise summaries of YouTube videos (less than 15 minutes). ",
      imageUrl: summaryYT,
      link: "https://github.com/javiermedinaj/summarize-yt",
    },
    {
      title: "Supermarket Offers Scraper",
      description:
        "A web scraper that collects offers from local supermarkets. Updated every 12 hours via Github Actions. Searchers in local has deployed in a Docker container.",
      imageUrl: scraper,
      link: "https://github.com/javiermedinaj/market-scrapper",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-12xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center ">
          Projects
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          I enjoy building React applications that enhance user experiences by
          leveraging a variety of tools and technologies. My approach focuses on
          solving problems creatively and efficiently.
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
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View on Github
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I also like to create frontend templates using different types of
            animation libraries, such as GSAP, Lenis, and Framer Motion.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View Templates
          </Link>
        </div>
      </div>
    </section>
  );
}
