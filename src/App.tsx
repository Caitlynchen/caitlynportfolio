import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/AboutMe";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans relative">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Sidebar - Mobile (slide-in) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-hidden md:ml-64">
        {/* Mobile Top Bar */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow p-4 flex justify-between z-50">
          <span className="font-bold text-lg">Caitlyn</span>
          <button className="text-2xl" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
        </div>

        <main className="flex-grow md:mt-0 mt-14">
          <Hero />

          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <About />
            </div>
          </section>

          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <Skills />
            </div>
          </section>

          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <Projects />
            </div>
          </section>

          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <Education />
            </div>
          </section>

          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <Certifications />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
