import React from 'react';
import { Music, Bot, Mic } from 'lucide-react'; // Changed BookOpen to Bot
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white border-y-2 border-crayon-dark">
      <div className="max-w-5xl mx-auto">
        <SectionTitle color="bg-crayon-blue">Who Am I?</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
           
           {/* Left Column: Bio Text */}
           <div className="font-hand text-xl space-y-6">
              <p>
                I'm a B.Tech CSE student with a passion for building things. I don't just write code; I look for the intersection between <strong>logic and art</strong>.
              </p>
              <p>
                My foundation is strong in Frontend and Backend, but I love stepping away from the screen to build real-world machines. I have a deep interest in <strong>Robotics and IoT</strong>.
              </p>
              <p>
                 Beyond the screen, I believe in disciplined learning. Whether it's tinkering with <strong>Arduino & Sensors</strong> to automate my room or strumming my <strong>guitar</strong> to find a new rhythm, I'm always looking to grow.
              </p>

              {/* Hobbies / Interests Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-green-100 border-2 border-crayon-dark rounded-lg text-sm font-bold flex items-center gap-2 rotate-1 hover:rotate-0 transition-transform cursor-default">
                  <Music size={16}/> Guitar & Singing
                </span>
                <span className="px-3 py-1 bg-yellow-100 border-2 border-crayon-dark rounded-lg text-sm font-bold flex items-center gap-2 -rotate-2 hover:rotate-0 transition-transform cursor-default">
                  <Bot size={16}/> Robotics & IoT
                </span>
                <span className="px-3 py-1 bg-red-100 border-2 border-crayon-dark rounded-lg text-sm font-bold flex items-center gap-2 rotate-2 hover:rotate-0 transition-transform cursor-default">
                  <Mic size={16}/> Public Speaking
                </span>
              </div>
           </div>

           {/* Right Column: Profile Card */}
           <div className="relative group">
              <div className="bg-crayon-paper border-2 border-crayon-dark shadow-hard rounded-xl p-6 rotate-2 group-hover:rotate-0 transition-all duration-300">
                 <div className="flex items-center gap-4 border-b-2 border-crayon-dark pb-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full border-2 border-crayon-dark overflow-hidden">
                      {/* Placeholder Avatar */}
                      <img 
              src="/profile.png" 
              alt="Pulkit Sujaan" 
              className="w-full h-full object-cover" 
              // OPTIONAL: Add this class for Black & White style:
              // className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
            />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-2xl">Pulkit Sujaan</h3>
                      <p className="font-hand text-gray-600">Full Stack & Robotics</p>
                    </div>
                 </div>
                 <div className="space-y-2 font-hand text-lg">
                    <div className="flex justify-between">
                      <span>Education:</span>
                      <span className="font-bold">B.Tech CSE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus:</span>
                      <span className="font-bold">Web Dev & Robotics</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vibe:</span>
                      <span className="font-bold text-crayon-red">Techie & Creative</span>
                    </div>
                 </div>
              </div>
              
              {/* Decorative Background Blob */}
              <div className="absolute top-4 -right-4 w-full h-full bg-crayon-blue rounded-xl border-2 border-crayon-dark z-[-1] opacity-50"></div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default About;