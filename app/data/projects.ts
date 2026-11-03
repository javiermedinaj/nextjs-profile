export type ProjectStatus = "live" | "code";

export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  status: ProjectStatus;
  live?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "bafweek",
    title: "BAFWEEK",
    description:
      "Landing de Buenos Aires Fashion Week con animaciones de entrada, marquee y secciones interactivas.",
    stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    category: "frontend",
    status: "live",
    live: "https://bafweekints.vercel.app",
    repo: "https://github.com/javiermedinaj/bafweekints",
    featured: true,
  },
  {
    slug: "festival-enchastre",
    title: "Festival Enchastre",
    description:
      "Sitio de festival con loader animado, line-up, merch y transiciones GSAP.",
    stack: ["React", "TypeScript", "GSAP", "Motion"],
    category: "frontend",
    status: "live",
    live: "https://festival-framer.vercel.app",
    repo: "https://github.com/javiermedinaj/festival-framer",
    featured: true,
  },
  {
    slug: "benoit-studios",
    title: "Benoit Studios",
    description:
      "Portfolio fotográfico con scroll suave Lenis, máscaras y animaciones GSAP/Framer Motion.",
    stack: ["React", "GSAP", "Lenis", "Framer Motion"],
    category: "frontend",
    status: "live",
    live: "https://segredo-2.vercel.app",
    repo: "https://github.com/javiermedinaj/segredo-2",
    featured: true,
  },
  {
    slug: "matias-flores",
    title: "Matías Flores Portfolio",
    description:
      "Portfolio de posters y merchandise con Next.js, animaciones y contacto con Resend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Resend"],
    category: "frontend",
    status: "live",
    live: "https://matiasflores.vercel.app",
    repo: "https://github.com/javiermedinaj/matias-flores-portfolio",
    featured: true,
  },
  {
    slug: "locomitve",
    title: "Locomitve",
    description:
      "Réplica de agencia con Lenis, animaciones de entrada y navegación tipo editorial.",
    stack: ["React", "Lenis", "Framer Motion"],
    category: "frontend",
    status: "live",
    live: "https://locomitve.vercel.app",
    repo: "https://github.com/javiermedinaj/locomitve",
  },
  {
    slug: "summarize-yt",
    title: "Summarize YT",
    description:
      "App que resume videos de YouTube con IA y genera prompts y flashcards para estudiar.",
    stack: ["React", "Node.js", "Azure OpenAI", "Vercel"],
    category: "ai",
    status: "live",
    live: "https://summarize-ai-yt.vercel.app",
    repo: "https://github.com/javiermedinaj/summarize-yt",
    featured: true,
  },
  {
    slug: "ollama-ocr",
    title: "Ollama OCR",
    description:
      "Pipeline que convierte imágenes y tickets en datasets CSV usando Llama OCR.",
    stack: ["Node.js", "Llama OCR", "ExcelJS"],
    category: "ai",
    status: "code",
    repo: "https://github.com/javiermedinaj/ocr-md2csv",
  },
  {
    slug: "gsap-loader",
    title: "GSAP Loader",
    description:
      "Secuencia de carga con galería, círculos y revelado de hero animado con GSAP.",
    stack: ["React", "GSAP"],
    category: "animation",
    status: "live",
    live: "https://loader-gsap.vercel.app",
    repo: "https://github.com/javiermedinaj/loader-gsap",
    featured: true,
  },
  {
    slug: "lenis-scroll",
    title: "Lenis Scroll",
    description:
      "Scroll suave con Lenis y GSAP: captions, grid y timelines scrubbeados.",
    stack: ["React", "Lenis", "GSAP"],
    category: "animation",
    status: "live",
    live: "https://agency-scroll.vercel.app",
    repo: "https://github.com/javiermedinaj/lenis-scroll",
    featured: true,
  },
  {
    slug: "infinite-scroll",
    title: "Infinite Scroll",
    description:
      "Scroll infinito con Lenis y contador de progreso actualizado sin re-renders.",
    stack: ["React", "Lenis"],
    category: "animation",
    status: "live",
    live: "https://infinite-scroll-two-bice.vercel.app",
    repo: "https://github.com/javiermedinaj/lenis-architecture-infinite",
    featured: true,
  },
  {
    slug: "astro-weeding",
    title: "Astro Weeding",
    description:
      "Invitación de boda con Astro, scroll suave y animaciones de entrada.",
    stack: ["Astro", "Framer Motion"],
    category: "frontend",
    status: "live",
    live: "https://astro-weeding.vercel.app",
    repo: "https://github.com/javiermedinaj/astro-weeding",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
