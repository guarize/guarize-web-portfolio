/* eslint-disable max-len */
import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Footer.css';

export default function Footer() {
  const { darkMode } = useContext(PortfolioContext);

  const isMobile = useMediaQuery({ query: '(max-width: 1250px)' });

  return (
    <footer
      className={darkMode ? 'footer-wrapper-dark' : 'footer-wrapper-light'}
    >
      <span className="html-tag">{'<footer>'}</span>
      <div className="footer-container">
        <h2 className="footer-text">Get In Touch</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          expedita. Sed, temporibus explicabo expedita corrupti non deleniti.
        </p>
        <a
          className="footer-email"
          href="mailto:pedroguarize@hotmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
        {isMobile && (
          <div className="footer-socials">
            <a
              href="https://github.com/guarize"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithubAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/pedroguarize/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        )}
      </div>
      <span className="html-tag">{'</footer>'}</span>
    </footer>
  );
}
