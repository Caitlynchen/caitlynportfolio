import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../type';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Bliss Platform",
      description: [
        "Developed a stress management web platform that analyzes real-time biometric data from wearable devices to detect stress and deliver personalized music recommendations.",
        "Built the frontend using Next.js (TypeScript) and integrated with an AI-powered backend for stress analysis.",
        "Designed an intuitive, responsive UI with interactive wireframes and seamless live biometric data integration."
      ],
      tags: ["Next.js", "TypeScript",  "Biometric Data", "Frontend"]
    },
    {
      title: "Totem Storybook",
      description: [
        "Built a children's storybook web platform with admin and parent-facing interfaces optimized for Iranian access restrictions.",
        "Developed the frontend using React (TypeScript) and backend using Node.js and Parse; deployed the backend on Back4App.",
        "Integrated ImageKit.io for image hosting and ensured accessibility compliance."
      ],
      tags: ["React", "TypeScript", "Node.js", "Parse", "ImageKit.io"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;