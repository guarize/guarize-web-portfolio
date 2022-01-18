import React, { useContext } from 'react';
import { Header, ScrollIndicator, BackgroundAnimation } from '.';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/HomeSection.css';

export default function HomeSection() {
  const { darkMode } = useContext(PortfolioContext);

  const createHomeIntro = () => {
    const phrase = "Hey! I'm Pedro Guarize.";
    return (
      <div>
        {phrase.split('').map((letter, index) => (letter === '!' ? (
          <span
            key={index}
            className="home-intro-letter"
            style={{ animationDelay: `${index * 70}ms` }}
            aria-hidden="true"
          >
            {letter}
            <br />
          </span>
        ) : (
          <span
            key={index}
            className="home-intro-letter"
            style={{ animationDelay: `${index * 70}ms` }}
            aria-hidden="true"
          >
            {letter}
          </span>
        )))}
      </div>
    );
  };

  return (
    <section className={darkMode ? 'home-section-dark' : 'home-section-light'}>
      <Header />
      <section className="home-container">
        <div className="home-text">
          <span className="html-tag">{'<section>'}</span>
          <p className="home-role">Front-End Developer</p>
          <div className="home-intro-container">
            <span className="html-tag">{'<h1>'}</span>
            <h1 className="home-intro" aria-label="Hey! I'm Pedro Guarize.">
              {createHomeIntro()}
            </h1>
            <span className="html-tag">{'</h1>'}</span>
          </div>
          <p className="home-description">
            I&apos;m a passionate Front-end developer based in Brazil.
          </p>
          <span className="html-tag">{'</section>'}</span>
        </div>
        <BackgroundAnimation />
      </section>
      <ScrollIndicator />
    </section>
  );
}
