import React from 'react';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import homeLogo from '../images/Static assets-amico.svg';
import '../styles/HomeSection.css';

export default function HomeSection() {
  const createHomeIntro = () => {
    const phrase = "Hey! I'm Pedro Guarize.";
    return (
      <div>
        {phrase.split('').map((letter, index) => (
          <span key={index} className="home-intro-letter">
            {letter}
          </span>
        ))}
      </div>
    );
  };

  createHomeIntro();

  return (
    <section className="home-section">
      <Header />
      <section className="home-container">
        <div className="home-text">
          <span className="html-tag">{'<section>'}</span>
          <p className="home-role">Front-End Developer</p>
          <h1 className="home-intro">{createHomeIntro()}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            maiores eveniet totam fugiat dolore.
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
              fill="#262626"
            />
          </svg>
          <img src={homeLogo} alt="" />
        </div>
      </section>
      <ScrollIndicator />
    </section>
  );
}
