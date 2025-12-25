import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data'; // Make sure your data file exists

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle color="bg-crayon-cyan">Recent Work</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={i} className="flex flex-col h-full hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_#2d2d2d] transition-all duration-300">
              
              {/* Colored Header Area */}
              <div className={`h-40 ${project.color} border-b-2 border-crayon-dark mb-4 -mx-6 -mt-6 rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                <span className="font-hand text-gray-800 font-bold opacity-70 text-xl px-4 text-center">
                  {project.title}
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-2xl mb-2">{project.title}</h3>
              
              {/* Description - Grows to fill space so buttons align at bottom */}
              <p className="font-hand text-lg mb-4 text-gray-600 grow">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                 {project.tags.map(tag => (
                   <span key={tag} className="text-xs font-bold px-2 py-1 bg-white border border-crayon-dark rounded shadow-[2px_2px_0px_0px_#2d2d2d]">
                     {tag}
                   </span>
                 ))}
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold hover:text-crayon-red transition-colors"
                >
                  <Github size={18} /> Code
                </a>
                {project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 font-bold hover:text-crayon-blue transition-colors"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;