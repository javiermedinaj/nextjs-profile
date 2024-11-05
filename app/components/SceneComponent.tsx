'use client';
import { Scene } from './Scene';
import { useState } from 'react';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJava, 
  FaPython, 
  FaNodeJs, 
  FaJs,
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


interface Technology {
  name: string;
  description: string;
  icon: JSX.Element;
  category: 'frontend' | 'backend' | 'database' | 'language';
}

export function SceneComponent() {
  const [selectedTech, setSelectedTech] = useState<string | null>('frontend');

  const technologies: Technology[] = [
    {
      name: 'React',
      description: 'JavaScript library for building interactive and reactive user interfaces.',
      icon: <FaReact className="w-6 h-6 text-[#61DAFB]" />,
      category: 'frontend'
    },
    {
      name: 'HTML5',
      description: 'Markup language for structuring web content.',
      icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" />,
      category: 'frontend'
    },
    {
      name: 'CSS3',
      description: 'Style sheet language for designing and formatting web pages.',
      icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />,
      category: 'frontend'
    },
    {
      name: 'Java',
      description: 'Versatile language for enterprise application development.',
      icon: <FaJava className="w-6 h-6 text-[#007396]" />,
      category: 'language'
    },
    {
      name: 'Spring Boot',
      description: 'Java framework for creating robust and scalable web applications.',
      icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" />,
      category: 'backend'
    },
    {
      name: 'PostgreSQL',
      description: 'Powerful and open-source relational database management system.',
      icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
      category: 'database'
    },
    {
      name: 'Python',
      description: 'Versatile language ideal for web development, data, and automation.',
      icon: <FaPython className="w-6 h-6 text-[#3776AB]" />,
      category: 'language'
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime environment for server-side execution.',
      icon: <FaNodeJs className="w-6 h-6 text-[#339933]" />,
      category: 'backend'
    },
    {
      name: 'Express',
      description: 'Minimalist and flexible framework for Node.js.',
      icon: <SiExpress className="w-6 h-6 text-white" />,
      category: 'backend'
    },
    {
        name: "JavaScript",
        description: "Interpreted and object-oriented programming language.",
        icon: <FaJs className="w-6 h-6 text-yellow-400" />,
        category: "language"
    },
    {
        name: "TypeScript",
        description: "Open-source programming language that extends JavaScript.",
        icon: <SiTypescript className="w-6 h-6 text-blue-400" />,
        category: "language"
    },
    {
        name: "Tailwind CSS",
        description: "Component-based UI design framework.",
        icon: <RiTailwindCssFill className="w-6 h-6 text-blue-400" />,
        category: "frontend"
    },
    {
        name: "MongoDB",
        description: "Scalable and flexible NoSQL database.",
        icon: <SiMongodb className="w-6 h-6 text-green-400" />,
        category: "database"
    },
    {
        name: "MySQL",
        description: "Open-source relational database management system.",
        icon: <SiMysql className="w-6 h-6 text-blue-400" />,
        category: "database"
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Technologies </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-8xl mx-auto">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {['frontend', 'backend', 'database', 'language'].map((category) => (
              <button
                key={category}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedTech === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-zinc-900 hover:bg-zinc-800'}`}
                onClick={() => setSelectedTech(category === selectedTech ? null : category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {selectedTech ? (
              technologies
                .filter(tech => tech.category === selectedTech)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors "
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="transform group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-bold">{tech.name}</h3>
                    </div>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                ))
            ) : (
              <p className="text-gray-400">Selecciona una categoría para ver las tecnologías.</p>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative bg-zinc-900 rounded-lg">
          <Scene />
        </div>
      </div>
    </div>
  );
}