import React, { useContext } from 'react';
import LightDarkButton from './LightDarkButton';
import headerLogo from '../assets/images/pg-logo.png';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Header.css';
import NavBar from './NavBar';

export default function Header() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <header
      className={darkMode ? 'header-wrapper-dark' : 'header-wrapper-light'}
    >
      <section className="header-container">
        <span className="html-tag">{'<header>'}</span>
        <img src={headerLogo} alt="pg logo" className="header-logo" />
        <NavBar />
        <LightDarkButton />
        <span className="html-tag">{'</header>'}</span>
      </section>
    </header>
  );
}
