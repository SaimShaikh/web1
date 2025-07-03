import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const Blog: React.FC = () => {
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

  const blogPosts = [
    {
      title: 'Getting Started with Kubernetes on AWS EKS',
      summary: 'A comprehensive guide to deploying your first Kubernetes cluster on Amazon EKS with best practices.',
      date: '2024-01-15',
      readTime: '8 min read',
      link: '#',
    },
    {
      title: 'Infrastructure as Code with Terraform',
      summary: 'Learn how to manage your cloud infrastructure using Terraform with practical examples.',
      date: '2024-01-08',
      readTime: '12 min read',
      link: '#',
    },
    {
      title: 'Docker Security Best Practices',
      summary: 'Essential security practices for containerized applications in production environments.',
      date: '2024-01-01',
      readTime: '6 min read',
      link: '#',
    },
    {
      title: 'CI/CD Pipeline with Jenkins and GitHub',
      summary: 'Building automated deployment pipelines using Jenkins, GitHub Actions, and AWS.',
      date: '2023-12-25',
      readTime: '10 min read',
      link: '#',
    },
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-6 fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Latest Blog Posts
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-effect neon-border rounded-lg p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="font-orbitron text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.summary}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
              
              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 font-semibold"
              >
                Read More
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="neon-border bg-transparent text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold inline-block"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;