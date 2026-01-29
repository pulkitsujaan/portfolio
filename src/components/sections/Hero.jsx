import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  // 1. Dynamic Badge Logic
  const roles = ["Pulkit Sujaan! 🎸", "a Coder! 💻", "a Robotics Fan! 🤖"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-40 pb-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* --- DOODLES (Absolute Positioned) --- */}
      
      {/* Doodle 1: Curly Arrow pointing to Button (Hidden on mobile) */}
      <svg className="hidden md:block absolute bottom-32 left-[55%] w-24 h-24 text-gray-400 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20,10 C50,10 80,40 80,80" />
        <path d="M60,70 L80,80 L90,60" /> {/* Arrowhead */}
        <text x="10" y="20" className="font-hand text-sm border-0">Check this!</text>
      </svg>

      {/* Doodle 2: Robotics Gear near 'Technology' */}
      <svg className="absolute top-1/3 right-[10%] md:right-[20%] w-16 h-16 text-crayon-blue opacity-60 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
      </svg>

      {/* Doodle 3: Musical Note near 'Creativity' */}
      <svg className="absolute top-1/3 left-[10%] md:left-[20%] w-12 h-12 text-crayon-red opacity-60 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        
        {/* Animated Badge */}
        <div className="inline-block mb-6 hover:scale-105 transition-transform duration-300">
           <span className="bg-crayon-cyan px-4 py-1 border-2 border-crayon-dark font-hand font-bold text-lg rounded-full shadow-hard cursor-default min-w-[200px] inline-block">
             Hi, I'm {roles[roleIndex]}
           </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-crayon-dark">
          Blending <span className="text-crayon-red decoration-wavy underline decoration-4 underline-offset-4">Creativity</span> & <br />
          <span className="bg-crayon-yellow px-4 border-2 border-crayon-dark rounded-lg shadow-hard inline-block transform -rotate-2 hover:rotate-2 transition-transform mt-2">
            Technology
          </span>
        </h1>

        {/* Improved Subtext (Personalized) */}
        <p className="font-hand text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer & <span className="text-crayon-blue font-bold">Robotics Enthusiast</span>.<br/>
          I build web apps, program bots, and solve real problems.
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