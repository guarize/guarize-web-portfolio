import React, { useContext } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LightDarkButton from './LightDarkButton';
import headerLogo from '../assets/images/pg-logo.png';
import '../styles/Header.css';
import PortfolioContext from '../context/PortfolioContext';

export default function Header() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <header
      className={darkMode ? 'header-wrapper-dark' : 'header-wrapper-light'}
    >
      <section className="header-container">
        <span className="html-tag">{'<header>'}</span>
        <img src={headerLogo} alt="pg logo" className="header-logo" />
        <div className="header-menu">
          <a href="#toolbox">About</a>
          <a href="#toolbox">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#toolbox">Contacts</a>
        </div>
        <section className="header-socials">
          <a href="https://github.com/guarize" target="_blank" rel="noreferrer">
            <BsGithub />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pedroguarize/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            <span>LinkedIn</span>
          </a>
        </section>
        <LightDarkButton />
        <span className="html-tag">{'</header>'}</span>
      </section>
    </header>
  );
}
