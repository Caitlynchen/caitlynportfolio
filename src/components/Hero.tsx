import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id = "home"
      className="py-44 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('./background2.jpg')" }}
    >
      <div className="container mx-auto px-6 text-left -mt-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl  text-white mb-6">Caitlyn Chen</h2>
          <p className="text-xl text-white mb-8">
            Full-Stack Developer / Data Analyst

          </p>
        </div>
      </div>
    </section>

  );
};

export default Hero;