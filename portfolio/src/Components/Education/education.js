import React from 'react';
import './education.css';

const Education = () => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section id="education">
      <div className="educationcontent">
        <div className="education">
          <div className="resume">
            <a href="https://drive.google.com/file/d/1ws2aW1hGHCr_f-LJHETir0laDuXrDtFR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-link">View My CV</a>
            <br />
          </div>
          <br />
          <br />
          <br />
          <div className="northville">
            <h3>Northville High School: 2021-2025</h3>
            {"High School Student: 4.0 GPA"}
          </div><br /><br />
          <div className="schoolcraft">
            <h3>Schoolcraft Community College: 2023-2024</h3>
            {"Dual Enrolled Student: Cybersecurity Fundamentals"}
          </div> <br /><br />
          <div className="washtenaw">
            <h3>Washtenaw Community College: 2024-2025</h3>
            {"Dual Enrolled Student: Linear Algebra, Multivariable, Differential Equations"}
          </div>
          <div onClick={() => handleClick('portfolio')} className="educationcontent">
          <span className="educationScroll">⬇ Projects ⬇</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Education;
