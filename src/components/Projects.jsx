import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Projects.css';

export default function Projects() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <section
      className={darkMode ? 'projects-wrapper-dark' : 'projects-wrapper-light'}
    >
      <div>
        <h2>Portfolio</h2>
      </div>
    </section>
  );
}
