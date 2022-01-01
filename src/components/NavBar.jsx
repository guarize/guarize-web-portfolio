import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { stack as Menu } from 'react-burger-menu';
import useWindowDimensions from '../services/WindowDimensions';
import burgerStyles from '../services/BurgerStyles';

export default function NavBar() {
  const { screenWidth } = useWindowDimensions();

  const navItems = () => (
    <section className="header-navbar">
      <section className="header-menu">
        <a href="#toolbox">About</a>
        <a href="#toolbox">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#toolbox">Contacts</a>
      </section>
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
    </section>
  );

  return screenWidth <= 1015 ? (
    <Menu right styles={burgerStyles}>
      {navItems()}
    </Menu>
  ) : (
    navItems()
  );
}
