import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { socialLinks } from '../../data';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  // State to handle form status
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); // Clear previous messages

    const formData = new FormData(event.target);

    // --- PASTE YOUR ACCESS KEY HERE ---
    formData.append("access_key", "8b555f14-22af-4d6f-8c6a-0ac98656e9b6"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        event.target.reset(); // Clear the form
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <div className="max-w-2xl mx-auto">
        <SectionTitle color="bg-crayon-red">Let's Connect</SectionTitle>
        
        <Card className="bg-white">
          <p className="font-hand text-xl text-center mb-6">
            Have an idea? Want to discuss <strong>tech, music, or robotics?</strong> Drop a message!
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
          <form className="space-y-4" onSubmit={onSubmit}>
            {/* Hidden Subject Field for Email */}
            <input type="hidden" name="subject" value="New Portfolio Contact Message" />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-bold font-hand text-lg">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                  placeholder="Your Name" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold font-hand text-lg">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                  placeholder="you@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold font-hand text-lg">Message</label>
              <textarea 
                name="message"
                required
                rows="4" 
                className="w-full bg-gray-50 border-2 border-crayon-dark rounded-lg p-3 focus:outline-none focus:shadow-hard focus:bg-white transition-all font-hand text-xl" 
                placeholder="Let's build something awesome..."
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              variant={result === "Success" ? "success" : "primary"} 
              className="w-full flex justify-center items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending... <Loader2 className="animate-spin" size={20}/></>
              ) : result === "Success" ? (
                "Message Sent! ✅"
              ) : (
                <>Send Message <Send size={20}/></>
              )}
            </Button>

            {/* Error Message Display */}
            {result && result !== "Success" && (
              <p className="text-red-500 font-bold font-hand text-center mt-2">{result}</p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;