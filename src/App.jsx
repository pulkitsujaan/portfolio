import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-crayon-yellow selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center font-hand text-xl border-t-2 border-crayon-dark bg-white">
        <p>© 2025 Pulkit Sujaan. Built with 🎵 and ☕</p>
      </footer>
    </div>
  );
};

export default App;