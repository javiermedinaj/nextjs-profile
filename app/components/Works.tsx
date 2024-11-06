import Image from 'next/image'
import Link from 'next/link'
import librarie from '../assets/librarie.png'
import scraper from '../assets/scraper.png'
import qr from '../assets/qr.png'

export function Works() {
  const projects = [
    {
      title: 'Pre-template Components with animations',
      description: 'A collection of pre-designed React components with animations, including modals, sliders, and loaders. These components are fully customizable and easy to integrate into any project, providing a quick and efficient way to enhance user interfaces and create engaging user experiences.',
      imageUrl: librarie,
      link: '/projects'
    },
    {
      title: 'QR Code Generator for URLs',
      description: 'A React web application that generates QR codes from URLs, streamlining the process of creating QR codes for menus, documents, and other resources. Perfect for quickly sharing Google Drive links, websites, and more with just a scan.',
      imageUrl: qr,
      link: 'https://qr-web-vite.vercel.app/'
    },
    {
      title: 'Supermarket Offers Scraper',
      description: 'A JavaScript-based web scraper that collects daily offers from local supermarkets. This project helps streamline the process of tracking discounts and promotions, enabling users to make informed shopping decisions and save money by staying updated on the best deals in their area. Updated every 12 hours',
      imageUrl: scraper,
      link:'https://offers-ba.vercel.app/'
    }    
  ];

  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
      I enjoy building React applications that enhance user experiences by leveraging a variety of tools and technologies. My approach focuses on solving problems creatively and efficiently, tailoring solutions to different needs and optimizing functionality for the best possible outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
  <div 
    key={index}
    className="bg-zinc-900 shadow-md rounded-lg overflow-hidden"
  >
    <Image
      src={project.imageUrl}
      alt={project.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <Link 
        href={project.link}
        {...(project.link.startsWith('/') ? {} : {
          target: "_blank",
          rel: "noopener noreferrer"
        })}
        className="inline-block"
      >
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </Link>
      <p className="text-gray-600">{project.description}</p>
    </div>
  </div>
))}
      </div>
    </div>
  );
}