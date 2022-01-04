import React, { useContext } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/SocialsFixed.css';

export default function SocialsFixed() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <div className={darkMode ? 'socials-fixed-dark' : 'socials-fixed-light'}>
      <div className="socials-icons">
        <a href="https://github.com/guarize" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pedroguarize/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>
      <hr className="socials-fixed-line" />
    </div>
  );
}
