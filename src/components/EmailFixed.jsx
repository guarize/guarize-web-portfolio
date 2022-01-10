import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/EmailFixed.css';

export default function EmailFixed() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <div className={darkMode ? 'email-fixed-dark' : 'email-fixed-light'}>
      <a
        href="mailto:pedroguarize@hotmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className="email-text"
      >
        pedroguarize@hotmail.com
      </a>
      <hr className="email-fixed-line" />
    </div>
  );
}
