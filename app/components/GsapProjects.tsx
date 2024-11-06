import gif1 from '../assets/gif1.gif'
import gif2 from '../assets/gif2.gif'
import gif3 from '../assets/gif3.gif'
import Image from 'next/image';

export function GsapProjects() {
    const projects = [
      {
        title: "Loader animations",
        description: "Simple Loader animations with Gsap",
        features: ["Loader", "Image reveal", "Sequenced animations"],
        techStack: "React + GSAP ",
        role: "Animation",
        imageUrl: gif1,
        url: "https://loader-gsap.vercel.app"
      },
      {
        title: "Infinite scroll agency website",
        description: "An interactive website for a digital agency with sequenced animations, and interactive elements.",
        features: ["Lenis scroll", "Sequenced animations", "Interactive elements"],
        techStack: "React + GSAP + Lenis",
        role: "Animation",
        imageUrl : gif2,
        url:"https://agency-scroll.vercel.app/"
      },
      {
        title: "Infinite gallery with timeline animations",
        description: "A gallery of images with timeline animations, custom transitions, and scroll-based narratives.",
        features: ["Timeline animations", "Custom transitions", "Scroll-based narratives"],
        techStack: "React + GSAP + Lenis",
        role: "Animation",
        imageUrl: gif3,
        url:"https://gallery-button.vercel.app"
      }
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">GSAP Animation Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Showcasing projects where I leveraged GSAP to create engaging user experiences and smooth animations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-xl p-6 hover:shadow-xl"
            >
                  <div className="relative aspect-video">
            <Image
              src={project.
                imageUrl
              }
              alt={project.title}
              fill
              className="object-cover w-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 190vw, 33vw"
            />
          </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3 mt-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="text-emerald-500 text-xs font-semibold mb-2">KEY FEATURES</div>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">Tech Stack:</span>
                    <span className="ml-2 text-gray-300">{project.techStack}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">Role:</span>
                    <span className="ml-2 text-gray-300">{project.role}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">Preview:</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400">
                      {project.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }