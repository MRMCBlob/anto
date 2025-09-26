import React from 'react';
import './Projects.css';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  status: 'in-progress' | 'completed';
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Diodon OS',
      description: 'A Linux-based operating system designed specifically for programmers, built primarily in C. Features an optimized development environment with custom tools and utilities.',
      technologies: ['C', 'Linux Kernel', 'Assembly', 'Shell Scripting'],
      githubLink: 'https://github.com/MRMCBlob/DiodonOS',
      status: 'in-progress',
      featured: true
    },
    {
      name: 'Triangular Bot',
      description: 'A fully-featured Discord bot built with TypeScript, featuring modular components written in Go, C, and Rust for optimal performance.',
      technologies: ['TypeScript', 'Go', 'C', 'Rust', 'Discord.js', 'Node.js'],
      githubLink: 'https://github.com/triangular-discord',
      status: 'in-progress',
      featured: true
    },
    {
      name: 'Driftaway',
      description: 'A comprehensive coding library providing code snippets and utilities for every programming language. An essential resource for developers across all tech stacks.',
      technologies: ['Multi-language', 'Documentation', 'API Design', 'Web Platform'],
      githubLink: 'https://github.com/MRMCBlob',
      status: 'in-progress',
      featured: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="status-badge completed">Completed</span>;
      case 'in-progress':
        return <span className="status-badge in-progress">In Progress</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my latest work in system programming, web development, and developer tools
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                {getStatusBadge(project.status)}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <h4 className="tech-label">Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/MRMCBlob" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;