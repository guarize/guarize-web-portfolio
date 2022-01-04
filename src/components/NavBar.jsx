import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import useWindowDimensions from '../services/WindowDimensions';
import burgerStyles from '../services/BurgerStyles';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { screenWidth } = useWindowDimensions();

  const navItems = () => (
    <section className="header-navbar">
      <section className="header-menu">
        <Link
          to="toolbox"
          smooth
          duration={0}
          offset={-55}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth
          duration={0}
          offset={-55}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="footer"
          smooth
          duration={0}
          onClick={() => setMenuOpen(false)}
        >
          Contacts
        </Link>
      </section>
    </section>
  );

  return screenWidth <= 1015 ? (
    <Menu
      isOpen={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
      right
      styles={burgerStyles}
      disableAutoFocus
    >
      {navItems()}
    </Menu>
  ) : (
    navItems()
  );
}
