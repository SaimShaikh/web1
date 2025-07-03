import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="w-64 h-64 mx-auto md:mx-0 mb-8 glass-effect rounded-full flex items-center justify-center neon-border">
              <User size={120} className="text-cyan-400" />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate DevOps fresher with a strong foundation in cloud technologies 
              and automation. My journey in the tech world is driven by curiosity and the 
              desire to build robust, scalable systems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in <span className="text-cyan-400 font-semibold">AWS</span>, 
              <span className="text-cyan-400 font-semibold"> Docker</span>, 
              <span className="text-cyan-400 font-semibold"> Kubernetes</span>, and 
              <span className="text-cyan-400 font-semibold"> Jenkins</span>, I love turning 
              complex problems into elegant solutions through code and automation.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not architecting infrastructure or writing Python scripts, you'll 
              find me exploring the latest in cloud computing, contributing to open-source 
              projects, or sharing my learnings through blogs and community interactions.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Open Source'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 glass-effect neon-border rounded-full text-sm font-medium text-cyan-400"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;