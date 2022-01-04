import React from 'react';
import { stack as Menu } from 'react-burger-menu';
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
    </section>
  );

  return screenWidth <= 1015 ? (
    <Menu right styles={burgerStyles} disableAutoFocus>
      {navItems()}
    </Menu>
  ) : (
    navItems()
  );
}
