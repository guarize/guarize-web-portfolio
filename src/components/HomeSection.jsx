import React, { useContext } from 'react';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import homeLogo from '../assets/images/home-logo-programming.svg';
import '../styles/HomeSection.css';
import PortfolioContext from '../context/PortfolioContext';

export default function HomeSection() {
  const { darkMode } = useContext(PortfolioContext);

  const createHomeIntro = () => {
    const phrase = "Hey! I'm Pedro Guarize.";
    return (
      <div>
        {phrase.split('').map((letter, index) => (letter === '!' ? (
          <span key={index} className="home-intro-letter">
            {letter}
            <br />
          </span>
        ) : (
          <span key={index} className="home-intro-letter">
            {letter}
          </span>
        )))}
      </div>
    );
  };

  createHomeIntro();

  return (
    <section className={darkMode ? 'home-section-dark' : 'home-section-light'}>
      <Header />
      <section className="home-container">
        <div className="home-text">
          <span className="html-tag">{'<section>'}</span>
          <p className="home-role">Front-End Developer</p>
          <div className="home-intro-container">
            <span className="html-tag">{'<h1>'}</span>
            <h1 className="home-intro">{createHomeIntro()}</h1>
            <span className="html-tag">{'<h1>'}</span>
          </div>
          <p className="home-description">
            I&apos;m a passionate Front-end developer based in Brazil.
          </p>
          <span className="html-tag">{'</section>'}</span>
        </div>
        <div className="home-avatar">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="blobSvg"
            className="home-svg"
          >
            <path
              id="blob"
              d="M445,346.5Q404,443,303.5,450.5Q203,458,123,404Q43,350,83.5,269.5Q124,189,168.5,137.5Q213,86,303.5,77.5Q394,69,440,159.5Q486,250,445,346.5Z"
              fill="#181818"
            />
          </svg>
          <img src={homeLogo} alt="programming logo" />
        </div>
      </section>
      <ScrollIndicator />
    </section>
  );
}
