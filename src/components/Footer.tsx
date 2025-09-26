import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Anto</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating innovative solutions 
              with cutting-edge technologies.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links">
              <a 
                href="https://github.com/MRMCBlob" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                GitHub
              </a>
              <a 
                href="https://guns.lol/mr_mcblob" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                guns.lol
              </a>
              <a 
                href="https://discord.com/users/970700037216665640" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                Discord
              </a>
              <a 
                href="mailto:anto@mrmcblob.com" 
                className="footer-link"
              >
                Email
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Current Focus</h4>
            <div className="footer-projects">
              <span className="project-tag">Diodon OS</span>
              <span className="project-tag">Triangular Bot</span>
              <span className="project-tag">Driftaway</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Anto. Built with React & TypeScript.</p>
          </div>
          <div className="footer-location">
            <p>Made in Germany 🇩🇪</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;