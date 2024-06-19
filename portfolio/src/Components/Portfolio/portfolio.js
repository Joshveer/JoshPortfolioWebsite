import React, { useState, useRef } from 'react';
import './portfolio.css';
//Test
const Portfolio = () => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const [previewText, setPreviewText] = useState('(base) joshgrewal@Joshs-MacBook-Pro Projects %');
  const [isHovering, setIsHovering] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const intervalRef = useRef(null);

  const handleMouseEnter = (description) => {
    setIsHovering(true);
    setCurrentDescription(description);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let text = '(base) joshgrewal@Joshs-MacBook-Pro Projects % ';
    intervalRef.current = setInterval(() => {
      text += description[text.length - '(base) joshgrewal@Joshs-MacBook-Pro Projects % '.length] || '';
      setPreviewText(text);
      if (text === `(base) joshgrewal@Joshs-MacBook-Pro Projects % ${description}`) {
        clearInterval(intervalRef.current);
      }
    }, 7);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentDescription('');
    setPreviewText('(base) joshgrewal@Joshs-MacBook-Pro Projects %');
    clearInterval(intervalRef.current);
  };

  return (
    <section id="portfolio">
      <div className="portfoliocontent">
        <div className="portfolio">
          <h2>Completed</h2> <br />
          <div className="projects">
            <p
              onMouseEnter={() => handleMouseEnter('Worked alongside professors at Harvard/MIT on a project that involved generating images from EEG data. This was achieved using Conditional Generative Adversarial Networks (cGANs) and Stable Diffusion. The project aimed to generate photo-realistic images from EEG data collected from subjects looking at an array of flashing images for similar reconstruction. The project yielded a 99.997% accuracy, improving from the previous 95%.')}
              onMouseLeave={handleMouseLeave}
            >
              EEG/GAN Lab Harvard/MIT Internship
            </p>
            <p
              onMouseEnter={() => handleMouseEnter('Conducted a personal project where I employed GEO2R genetic databases to study the most underrepresented but expressed genes in literature about psoriasis. The project involved writing and presenting a literature review at the 2023 Detroit Science and Engineering Fair, where it won a recognition award.')}
              onMouseLeave={handleMouseLeave}
            >
              IB MYP Psoriasis Research Paper
            </p>
          </div>
          {(isHovering || currentDescription) && <div className="preview-popup">{previewText}</div>}
          <h2>In Progress</h2> <br />
          <div className="projects">
            <p onMouseEnter={() => handleMouseEnter('Currently interning at the H.O.P.E Lab at the University of Michigan, where I am studying the effects of brain activity on the perceived sensory input from craniofacial nerves. This research is crucial in understanding how our brain processes sensory information and could have significant implications in the field of neuroscience.')} onMouseLeave={handleMouseLeave}>H.O.P.E Lab University of Michigan Internship</p>
            <p onMouseEnter={() => handleMouseEnter('Working with C-Suite at Blueprints for Pangaea to donate millions of dollars worth of medical supplies to areas of need.')} onMouseLeave={handleMouseLeave}>B4P University of Michigan Internship</p>
            <p onMouseEnter={() => handleMouseEnter('Involved in a research project focused on oral cancer. The project aims to understand the genetic and environmental factors that contribute to the development of oral cancer, with the goal of improving prevention and treatment strategies.')} onMouseLeave={handleMouseLeave}>Oral Cancer Research</p>
            <p onMouseEnter={() => handleMouseEnter('Working on a project at Waterloo that employs Buckingham Pi Theorem along with symbolic regression to allow the training of neural networks on fewer parameters. This research could potentially improve the efficiency and speed of machine learning models, making them more accessible for real-world applications.')} onMouseLeave={handleMouseLeave}>Waterloo Internship</p>
            <p onMouseEnter={() => handleMouseEnter('Working on an app called AUX. This project involves developing a mobile application with a team of developers. The app aims to provide a platform for users to share and discover music.')} onMouseLeave={handleMouseLeave}>AUX App</p>
          </div>
          {(!isHovering && !currentDescription) && <div className="preview-popup">{previewText}</div>}
          <div onClick={() => handleClick('socials')} className="portfoliocontent">
            <span className="portfolioScroll">⬇ Contact Me ⬇</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;