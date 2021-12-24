import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-wrapper">
      <section className="header-container">
        <span className="html-tag">{'<header>'}</span>
        <p className="header-name">Pedro Guarize</p>
        <div className="header-menu">
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Contacts</p>
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
            <span>Linkedin</span>
          </a>
        </section>
        <span className="html-tag">{'</header>'}</span>
      </section>
    </header>
  );
}
