import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Social: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Medium',
      icon: MessageCircle,
      url: 'https://medium.com/@yourusername',
      color: 'hover:text-green-400',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.com/users/yourusername',
      color: 'hover:text-purple-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <section id="social" ref={sectionRef} className="py-20 px-6 fade-in">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-glow">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Follow my journey in the DevOps world and connect with me across various platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-effect neon-border rounded-full p-6 text-white ${social.color} transition-all duration-300 hover:scale-110 group`}
            >
              <social.icon size={32} className="group-hover:animate-pulse" />
            </a>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="glass-effect neon-border rounded-lg p-6">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-cyan-400">
              GitHub
            </h3>
            <p className="text-gray-300">
              Check out my latest projects, contributions, and open-source work.
            </p>
          </div>
          
          <div className="glass-effect neon-border rounded-lg p-6">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-cyan-400">
              LinkedIn
            </h3>
            <p className="text-gray-300">
              Connect professionally and follow my career journey in DevOps.
            </p>
          </div>
          
          <div className="glass-effect neon-border rounded-lg p-6">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-cyan-400">
              Medium
            </h3>
            <p className="text-gray-300">
              Read my technical articles and insights about cloud technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;