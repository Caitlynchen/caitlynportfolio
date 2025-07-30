import React from 'react';
import { Skill } from '../type';

const Skills: React.FC = () => {
  const Skills: Skill = {
    title: "Skills",
    items: [
      "HTML, CSS, Node.js, React, AJAX, Next.js, REST API",
      "Java, C, C++, Python, Kotlin, JavaScript, TypeScript",
      "SQL, MongoDB, Firebase, Parse, Git, Agile",


    ]
  };

  return (
    <section id = "skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px- max-w-2xlb text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{Skills.title}</h2>
        <ul className="space-y-2 text-gray-600">
          {Skills.items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;