import React from 'react';
import DynamicProjectText from './DynamicProjectText';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Anto</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              Passionate developer crafting innovative solutions with cutting-edge technologies. 
              From system-level programming to web applications, I build software that makes a difference.
            </p>
            
            <DynamicProjectText />
            
            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-outline"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="/pfp.png" 
                alt="Anto - Full Stack Developer" 
                className="hero-avatar"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;