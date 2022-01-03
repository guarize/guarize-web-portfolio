/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import LightDarkButton from './LightDarkButton';
import headerLogo from '../assets/images/pg-logo.png';
import PortfolioContext from '../context/PortfolioContext';
import NavBar from './NavBar';
import '../styles/Header.css';

export default function Header() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <header
      className={darkMode ? 'header-wrapper-dark' : 'header-wrapper-light'}
    >
      <section className="header-container">
        <span className="html-tag">{'<header>'}</span>
        <img
          src={headerLogo}
          alt="pg logo"
          className="header-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => scroll.scrollTo(0, { duration: '0', delay: '0', smooth: 'true' })}
        />
        <NavBar />
        <LightDarkButton />
        <span className="html-tag">{'</header>'}</span>
      </section>
    </header>
  );
}
