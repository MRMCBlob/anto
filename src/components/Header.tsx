import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
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
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img 
            src="/pfp.png" 
            alt="pfp" 
            className="profile-image"
          />
          <h1 className="logo-text">Anto</h1>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => scrollToSection('hero')} 
                className="nav-link"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="nav-link"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;