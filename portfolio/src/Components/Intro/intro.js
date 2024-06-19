import React from 'react';
import './intro.css';

const Intro = () => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="intro">
      <div className="introcontent">
        <span className="introName">Hi, I'm Joshveer Grewal</span>
        <br/>
        <span className="introtitle">Student Researcher & Full-Stack Developer</span>
        <br/>
        <p className="introBlurb">
          Constantly exploring the intersections between the fields of Medicine and CS
        </p>
        <br/>
        <p className="introPara">
          Early on I was interested in the expansive field of STEM. I cultivated my growth through Science Olympiad winning at the Invitational, Regional, State, and National levels. However, as I entered High School I realized that the world of research was hidden to many until higher education. Taking matters in my own hands, I delved deep into research with student-driven internships.
        </p>
        <br/>
        <div onClick={() => handleClick('education')} className="introcontent">
          <span className="introScroll">⬇ Education ⬇</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
