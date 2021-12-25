import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import ScrollIndicator from './ScrollIndicator';

export default function Projects() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <section
      className={darkMode ? 'projects-wrapper-dark' : 'projects-wrapper-light'}
      id="projects"
    >
      <div className="projects-title">
        <span className="html-tag">{'<h2>'}</span>
        <h2>Portfolio</h2>
        <span className="html-tag">{'</h2>'}</span>
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
