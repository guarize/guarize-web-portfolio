/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import LightDarkButton from './LightDarkButton';
import headerLogo from '../assets/images/pg-logo.png';
import PortfolioContext from '../context/PortfolioContext';
import NavBar from './NavBar';
import useWindowDimensions from '../services/WindowDimensions';
import '../styles/Header.css';

export default function Header() {
  const [scrollDir, setScrollDir] = useState(true);
  const { darkMode } = useContext(PortfolioContext);

  const { screenWidth } = useWindowDimensions();

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <header
      className={darkMode ? 'header-wrapper-dark' : 'header-wrapper-light'}
      style={{
        animation:
          screenWidth < 1015
            ? 'none'
            : scrollDir
              ? 'fadeIn 1s forwards'
              : 'fadeOut 1s forwards',
      }}
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
