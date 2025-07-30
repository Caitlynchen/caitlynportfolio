import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/AboutMe";
import Education from "./components/Education";
import Certifications from "./components/Certifications";


const App: React.FC = () => {
  return (
    
    <div className="flex min-h-screen bg-gray-50 font-sans">
      
      <Sidebar />

     
      <div className="flex-1 ml-64 flex flex-col">
        <main className="flex-grow">
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
