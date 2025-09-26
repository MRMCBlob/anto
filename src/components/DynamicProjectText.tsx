import React, { useState, useEffect } from 'react';
import './DynamicProjectText.css';

const projectUpdates = [
  "Currently optimizing Triangular Bot's TypeScript architecture for better performance",
  "Developing Atlantis OS core modules with advanced system integration",
  "Expanding Driftaway's code snippet library with new programming languages",
  "Implementing Diodon OS's C-based kernel for enhanced programmer productivity",
  "Building Triangular Bot's Go microservices for scalable Discord interactions",
  "Refining Atlantis OS user interface for seamless developer experience"
];

const DynamicProjectText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % projectUpdates.length
        );
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-text-container">
      <p className={`dynamic-text ${isVisible ? 'visible' : 'hidden'}`}>
        {projectUpdates[currentIndex]}
      </p>
    </div>
  );
};

export default DynamicProjectText;