import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/pfp.png" 
              alt="Anto - Full Stack Developer" 
              className="about-avatar"
            />
          </div>
          
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate Full Stack Developer with a deep love for system-level programming 
                and cutting-edge technologies. My journey in software development spans multiple 
                languages and frameworks, from low-level C programming to modern web applications.
              </p>
              
              <p>
                Currently, I'm working on several exciting projects including Diodon OS, a 
                Linux-based operating system tailored for programmers, and Triangular Bot, 
                a sophisticated Discord bot built with TypeScript and optimized components in 
                multiple languages.
              </p>
              
              <p>
                My expertise lies in creating efficient, scalable solutions that bridge the gap 
                between system programming and user-facing applications. I believe in writing 
                clean, maintainable code and constantly learning new technologies to stay at 
                the forefront of software development.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>System Programming</h3>
                <p>Deep expertise in C, C++, and Rust for system-level development</p>
              </div>
              <div className="highlight-item">
                <h3>Web Development</h3>
                <p>Modern full-stack applications with TypeScript, React, and Vite</p>
              </div>
              <div className="highlight-item">
                <h3>Developer Tools</h3>
                <p>Building tools and utilities that enhance developer productivity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;