import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  // Helper to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-40 pb-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Animated Badge */}
        <div className="inline-block mb-6 hover:rotate-6 transition-transform duration-300">
           <span className="bg-crayon-cyan px-4 py-1 border-2 border-crayon-dark font-hand font-bold text-lg rounded-full shadow-hard cursor-default">
             Hi, I'm Pulkit Sujaan! 🎸
           </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-crayon-dark">
          Blending <span className="text-crayon-red decoration-wavy underline decoration-4 underline-offset-4">Creativity</span> & <br />
          <span className="bg-crayon-yellow px-2 border-2 border-crayon-dark rounded-lg shadow-hard inline-block transform -rotate-2 hover:rotate-2 transition-transform mt-2">
            Technology
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-hand text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          B.Tech CSE Student turning ideas into real, usable products. I write code, play guitar, and solve problems.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
           <Button variant="primary" onClick={() => scrollToSection('projects')}>
              See My Work
           </Button>
           <Button variant="secondary" className="bg-white" onClick={() => scrollToSection('contact')}>
              Contact Me
           </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;