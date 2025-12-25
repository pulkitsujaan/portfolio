// src/data/index.js
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Toolkit', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: "EasyKheti (DevSoil)",
    description: "A gamified platform to promote sustainable farming practices and help farmers.",
    tags: ["React", "Render", "Node.js"],
    liveLink: "https://easykheti.onrender.com/",
    githubLink: "https://github.com/pulkitsujaan/DevSoil",
    color: "bg-green-100"
  },
  {
    title: "Mridang Fest",
    description: "Official website for the IIITU Cultural Fest 'Mridang', handling events and info.",
    tags: ["React", "Firebase", "CSS"],
    liveLink: "https://mridang.iiitu.ac.in",
    githubLink: "https://github.com/Shashanksharma218/Mridang",
    color: "bg-pink-100"
  },
  {
    title: "My Portfolio",
    description: "This very website! A creative neobrutalist portfolio built with modern tech.",
    tags: ["React", "Tailwind v4", "Vite"],
    liveLink: "#",
    githubLink: "https://github.com/pulkitsujaan",
    color: "bg-yellow-100"
  }
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/pulkitsujaan", color: "hover:text-gray-600" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pulkitsujaan/", color: "hover:text-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/pulkitsujaan/", color: "hover:text-pink-600" },
  { icon: Twitter, href: "https://x.com/pulkitsujaan", color: "hover:text-blue-400" },
];