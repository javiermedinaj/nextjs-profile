import Image from 'next/image'
import librarie from '../assets/librarie.png'
import videogif from '../assets/video.gif'
import qr from '../assets/qr.png'

export function Works() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      imageUrl: librarie,
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      imageUrl: videogif,
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      imageUrl: qr,
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        I enjoy creating templates in React to enhance user experience, using various tools like GSAP for animations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-900 shadow-md rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}