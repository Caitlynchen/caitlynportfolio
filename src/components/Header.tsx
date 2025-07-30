import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Caitlyn Chen</h1>
          <p className="text-gray-600 mt-1">
            Full Stack Development / Data Analysis / Web Design
          </p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-gray-700 hover:text-indigo-600">About Me</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-indigo-600">My Projects</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-indigo-600">Capabilities</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;