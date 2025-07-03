import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8">
          <h3 className="font-orbitron text-2xl font-bold text-glow mb-4">
            YourName.dev
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building the future of cloud infrastructure, one deployment at a time.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-400" size={20} fill="currentColor" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;