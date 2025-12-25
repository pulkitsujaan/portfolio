import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { navLinks } from '../../data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 px-4 py-4">
      <div className="max-w-6xl mx-auto bg-white border-2 border-crayon-dark shadow-hard rounded-xl px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-hand font-bold text-crayon-red flex items-center gap-2">
          <Code size={28} />
          <span>Pulkit.dev</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-hand text-xl font-bold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-crayon-cyan hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-1 active:scale-95 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 w-64 bg-crayon-yellow border-2 border-crayon-dark shadow-hard rounded-xl p-4 flex flex-col gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-hand text-xl font-bold border-b-2 border-crayon-dark pb-2 last:border-0" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;