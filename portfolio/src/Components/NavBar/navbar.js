import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = ['intro', 'education', 'portfolio', 'socials'];

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.7 });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className='navbar'>
        <div className="desktopMenu">
            <div onClick={() => handleClick('intro')} className={`desktopMenuListItem ${activeSection === 'intro' ? 'active' : ''}`}>Home</div>
            <div onClick={() => handleClick('education')} className={`desktopMenuListItem ${activeSection === 'education' ? 'active' : ''}`}>Education</div>
            <div onClick={() => handleClick('portfolio')} className={`desktopMenuListItem ${activeSection === 'portfolio' ? 'active' : ''}`}>Projects</div>
            <div onClick={() => handleClick('socials')} className={`desktopMenuListItem ${activeSection === 'socials' ? 'active' : ''}`}>Contact Me</div>
        </div>
    </nav>
  )
}

export default Navbar;

