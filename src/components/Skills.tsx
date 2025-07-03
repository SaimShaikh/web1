import React, { useEffect, useRef } from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Code, 
  Database,
  Monitor,
  Settings,
  Terminal,
  Wrench
} from 'lucide-react';

const Skills: React.FC = () => {
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

  const skills = [
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Docker', icon: Container, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: Settings, color: 'text-blue-500' },
    { name: 'Jenkins', icon: Wrench, color: 'text-red-400' },
    { name: 'Python', icon: Code, color: 'text-yellow-400' },
    { name: 'Terraform', icon: Server, color: 'text-purple-400' },
    { name: 'Linux', icon: Terminal, color: 'text-green-400' },
    { name: 'Ansible', icon: Settings, color: 'text-red-500' },
    { name: 'Grafana', icon: Monitor, color: 'text-orange-500' },
    { name: 'Prometheus', icon: Database, color: 'text-orange-600' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-700' },
    { name: 'GitHub', icon: GitBranch, color: 'text-gray-400' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-effect neon-border rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 group"
            >
              <skill.icon 
                size={48} 
                className={`mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
              />
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;