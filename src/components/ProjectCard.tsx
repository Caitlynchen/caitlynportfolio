import React from "react";
import { Project } from "../type";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {project.title}
      </h3>

      {/* ✅ Render description as bullet points */}
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* ✅ Render tags as badges */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-300 text-white px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
