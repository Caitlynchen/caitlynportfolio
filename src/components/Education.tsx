import React from "react";
import { EducationItem } from "../type"; // define this type in your types file

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      school: "British Columbia Institute of Technology",
      degree: "Diploma",
      major: "Computer Systems Technology (Predictive Analysis)",
      location: "Burnaby, BC",
      graduationDate: "May 2025",
    },
    {
      school: "University of British Columbia",
      degree: "Bachelor of Arts",
      major: "Economics",
      location: "Vancouver, BC",
      graduationDate: "Apr 2022",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow border border-gray-200"
            >
              <h3 className="text-l font-semibold text-gray-900">
                {item.school} – <span className="text-gray-700">{item.location}</span>
              </h3>
              <p className="text-gray-700 font-medium">{item.degree}</p>
              {item.major && (
                <p className="text-gray-600">{item.major}</p>
              )}
              <p className="text-gray-500 text-sm">{item.graduationDate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
