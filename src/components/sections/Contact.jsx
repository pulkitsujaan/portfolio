import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { socialLinks } from '../../data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <div className="max-w-2xl mx-auto">
        <SectionTitle color="bg-crayon-red">Let's Connect</SectionTitle>
        
        <Card className="bg-white">
          <p className="font-hand text-xl text-center mb-6">
            Have an idea? Want to discuss <strong>tech, music, or psychology?</strong> Drop a message!
          </p>
          
          {/* Social Links Row */}
          <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  p-3 bg-white border-2 border-crayon-dark rounded-full 
                  shadow-hard hover:translate-y-1 hover:shadow-none transition-all 
                  cursor-pointer text-crayon-dark ${social.color}
                `}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-bold font-hand text-lg">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                  placeholder="Your Name" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold font-hand text-lg">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                  placeholder="you@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold font-hand text-lg">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                placeholder="Let's build something awesome..."
              ></textarea>
            </div>
            
            <Button type="submit" variant="success" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;