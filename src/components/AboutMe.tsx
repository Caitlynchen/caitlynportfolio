import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id = "about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    About Me
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 text-center">
                    I am a dedicated and adaptable software developer with a strong foundation
                    in full-stack web development and predictive data analysis. Skilled in
                    languages such as Java, Python, and TypeScript, I have experience working
                    with modern frameworks like React, Next.js, and Node.js, as well as
                    databases including SQL and MongoDB. My background in computer systems
                    technology and economics allows me to approach problem-solving with both
                    technical precision and analytical thinking. Fluent in English and
                    Mandarin, I thrive in collaborative, agile environments and am committed
                    to building innovative, user-focused solutions while continuously
                    expanding my technical expertise.
                </p>
            </div>
        </section>


    );
};

export default AboutMe;