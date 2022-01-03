import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import useWindowDimensions from '../services/WindowDimensions';
import burgerStyles from '../services/BurgerStyles';

export default function NavBar() {
  const { screenWidth } = useWindowDimensions();

  const navItems = () => (
    <section className="header-navbar">
      <section className="header-menu">
        <Link to="toolbox" smooth duration={0} offset={-55}>Skills</Link>
        <Link to="projects" smooth duration={0} offset={-55}>Projects</Link>
        <Link to="toolbox" smooth duration={0}>Contacts</Link>
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
    <Menu right styles={burgerStyles} disableAutoFocus disableOverlayClick="false">
      {navItems()}
    </Menu>
  ) : (
    navItems()
  );
}
