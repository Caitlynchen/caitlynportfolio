import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../type';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: [
        "Designed and developed a personal portfolio website to showcase projects, skills, and experience.",
        "Built using React (TypeScript) and Tailwind CSS with a responsive, modern UI.",
        "Deployed on Vercel with optimizations for SEO and performance."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Frontend"]
    },
    
    {
      title: "Bliss Platform",
      description: [
        "Developed a stress management web platform that analyzes real-time biometric data from wearable devices to detect stress and deliver personalized music recommendations.",
        "Built the frontend using Next.js (TypeScript) and integrated with an AI-powered backend for stress analysis.",
        "Designed an intuitive, responsive UI with interactive wireframes and seamless live biometric data integration."
      ],
      tags: ["Next.js", "TypeScript", "Biometric Data", "Frontend"]
    },
    {
      title: "Totem Storybook",
      description: [
        "Built a children's storybook web platform with admin and parent-facing interfaces optimized for Iranian access restrictions.",
        "Developed the frontend using React (TypeScript) and backend using Node.js and Parse; deployed the backend on Back4App.",
        "Integrated ImageKit.io for image hosting and ensured accessibility compliance."
      ],
      tags: ["React", "TypeScript", "Node.js", "Parse", "ImageKit.io"]
    },
    {
      title: "LinkUp",
      description: [
        "Created a social platform to match users with nearby peers based on shared hobbies and interests.",
        "Implemented using Node.js, MongoDB, and JavaScript, following Agile development methodology.",
        "Managed user authentication and real-time interest matching for seamless user experience."
      ],
      tags: ["Node.js", "MongoDB", "JavaScript", "Agile", "Authentication"]
    },
    {
      title: "Study Space App",
      description: [
        "Developed a campus study space finder app to help students locate available study areas.",
        "Built using Firebase, Google Maps API, and JavaScript, with real-time data updates.",
        "Collaborated with team members using Git and GitHub for version control and deployment."
      ],
      tags: ["Firebase", "Google Maps API", "JavaScript", "GitHub"]
    }


  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 w-full">
      <div className="w-full px-6"> 
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h2>

        <div
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {projects.map((project, index) => (
            <div key={index} className="snap-center flex-shrink-0 w-80">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default Projects;