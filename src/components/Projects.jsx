import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import ScrollIndicator from './ScrollIndicator';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const { darkMode } = useContext(PortfolioContext);

  return (
    <section
      className={darkMode ? 'projects-wrapper-dark' : 'projects-wrapper-light'}
      id="projects"
    >
      <div className="projects-title">
        <div>
          <span data-aos="fade-right" className="html-tag">{'<h2>'}</span>
          <h2 data-aos="flip-up">Portfolio</h2>
          <span data-aos="fade-left" className="html-tag">{'</h2>'}</span>
        </div>
      </div>
      <span className="html-tag">{'<section>'}</span>
      <div className="projects-container">
        <ProjectCard />
      </div>
      <span className="html-tag">{'</section>'}</span>
      <ScrollIndicator />
    </section>
  );
}
