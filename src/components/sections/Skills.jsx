import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  // Added Arduino and IoT to the stack
  const techStack = [
    'JavaScript', 'React', 'Node.js', 
    'Arduino', 'C++', 'IoT & Sensors', 
    'Tailwind', 'MongoDB', 'Git'
  ];
  
  const softSkills = ['Problem Solving', 'Leadership', 'Creativity', 'Communication', 'Discipline', 'Innovation'];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle color="bg-crayon-yellow">My Toolkit</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tech Stack Column */}
          <div>
            <h3 className="text-2xl font-sans font-bold text-center mb-6 underline decoration-wavy decoration-crayon-red">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((skill, index) => (
                <div key={skill} className={`
                  px-4 py-2 border-2 border-crayon-dark rounded-lg font-bold text-lg
                  shadow-hard hover:-translate-y-1 bg-white cursor-default transition-transform
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0
                `}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Column */}
          <div>
            <h3 className="text-2xl font-sans font-bold text-center mb-6 underline decoration-wavy decoration-crayon-blue">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <div key={skill} className={`
                  px-4 py-2 border-2 border-crayon-dark rounded-lg font-bold text-lg
                  shadow-hard hover:-translate-y-1 bg-crayon-paper cursor-default transition-transform
                  ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0
                `}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;