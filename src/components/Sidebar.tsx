import React from "react";
import { FaLinkedin as LinkedInIcon, FaGithub as GithubIcon, FaEnvelope as MailIcon } from "react-icons/fa";

const IconLinkedIn = LinkedInIcon as React.FC<{ size?: number; className?: string }>;
const IconGithub = GithubIcon as React.FC<{ size?: number; className?: string }>;
const IconMail = MailIcon as React.FC<{ size?: number; className?: string }>;

const handleCopyEmail = () => {
  navigator.clipboard.writeText("caitlynckx990111@gmail.com");
  alert("Email copied to clipboard!");
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg fixed top-0 left-0 h-screen flex flex-col items-center py-6 justify-between">
      {/* Top Content */}
      <div className="flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-32 h-32 rounded-lg object-cover mb-4"
        />

        <h2 className="text-xl mb-6">Caitlyn</h2>

        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="#home" className="hover:text-purple-600">Caitlyn Chen</a>
          <a href="#about" className="hover:text-purple-600">About Me</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#projects" className="hover:text-purple-600">My Projects</a>
          <a href="#education" className="hover:text-purple-600">Education</a>
          <a href="#certification" className="hover:text-purple-600">Certifications</a>
        </nav>
      </div>

      {/* ✅ Bottom Contact Icons */}
      <div className="inline-flex justify-between gap-4">
        <a href="https://www.linkedin.com/in/cccaitlynchen/" target="_blank" rel="noopener noreferrer">
          <IconLinkedIn size={24} className="text-gray-400 hover:text-gray-600" />
        </a>

        <a href="https://github.com/Caitlynchen" target="_blank" rel="noopener noreferrer">
          <IconGithub size={24} className="text-gray-400 hover:text-gray-600" />
        </a>

        <button onClick={handleCopyEmail} className="cursor-pointer">
          <IconMail size={24} className="text-gray-400 hover:text-gray-600" />
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
