import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline.',
      tools: ['AWS', 'Terraform', 'Jenkins', 'Docker'],
      github: 'https://github.com/yourusername/project1',
      demo: null,
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Complete monitoring solution with Prometheus, Grafana, and custom dashboards.',
      tools: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
      github: 'https://github.com/yourusername/project2',
      demo: null,
    },
    {
      title: 'Multi-Environment Deployment',
      description: 'Ansible playbooks for automated application deployment across multiple environments.',
      tools: ['Ansible', 'Python', 'Linux', 'Git'],
      github: 'https://github.com/yourusername/project3',
      demo: null,
    },
    {
      title: 'Container Orchestration',
      description: 'Docker containerization and Kubernetes orchestration for microservices architecture.',
      tools: ['Docker', 'Kubernetes', 'Python', 'AWS'],
      github: 'https://github.com/yourusername/project4',
      demo: null,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect neon-border rounded-lg p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="font-orbitron text-xl font-bold mb-4 text-cyan-400 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-cyan-400 bg-opacity-20 text-cyan-400 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  <Github size={20} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;