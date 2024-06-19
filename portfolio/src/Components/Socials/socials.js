// Socials.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './socials.css';

const Socials = () => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section id="socials">
      <div className="socialcontent">
        <div className="contact-form">
          <form action="mailto:joshveergrewal@gmail.com" method="post" enctype="text/plain">
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="email" name="from" placeholder="Your Email" required />
            <textarea name="body" placeholder="Your Message" required></textarea>
            <input type="submit" value="Send" />
          </form>
          <div onClick={() => handleClick('intro')} className="socialcontent">
            <span className="socialsScroll">⬆ Home ⬆</span>
          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/Joshveer" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50} />
          </a>
          <a href="https://www.linkedin.com/in/joshveer-grewal-a61b7b24a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} />
          </a>
          <a href="mailto:joshveergrewal@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={50} />
          </a>
          <a href="https://www.instagram.com/joshveergrewal/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Socials;