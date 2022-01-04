import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { VscTools } from 'react-icons/vsc';
import { FaLaptopCode } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import burgerStyles from '../services/BurgerStyles';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isScreenMedium = useMediaQuery({ query: '(max-width: 1015px)' });

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
          {isScreenMedium && <VscTools />}
          <span>Skills</span>
        </Link>
        <Link
          to="projects"
          smooth
          duration={0}
          offset={-55}
          onClick={() => setMenuOpen(false)}
        >
          {isScreenMedium && <FaLaptopCode />}
          <span>Projects</span>
        </Link>
        <Link
          to="footer"
          smooth
          duration={0}
          onClick={() => setMenuOpen(false)}
        >
          {isScreenMedium && <AiOutlineMail />}
          <span>Contacts</span>
        </Link>
      </section>
    </section>
  );

  return isScreenMedium ? (
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
