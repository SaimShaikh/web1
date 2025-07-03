import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-6">
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow animate-float">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cyan-400 font-medium">
          DevOps Enthusiast | Cloud Explorer | Automation Lover
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed">
          Passionate about building scalable infrastructure and automating everything. 
          Welcome to my digital universe where code meets cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="neon-border bg-transparent text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="text-cyan-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;