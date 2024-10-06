import Image from 'next/image'

export function Works() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      imageUrl: '/path/to/image2.jpg',
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      imageUrl: '/path/to/image3.jpg',
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-4 text-center">Works</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        I enjoy creating templates in React to enhance user experience, using various tools like GSAP for animations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
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