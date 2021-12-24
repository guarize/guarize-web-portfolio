import React, { useContext } from 'react';
import iconMoon from '../assets/images/icon-moon.svg';
import iconSun from '../assets/images/icon-sun.svg';
import PortfolioContext from '../context/PortfolioContext';

export default function LightDarkButton() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <div>
      <button type="button">
        <img
          src={darkMode ? iconMoon : iconSun}
          alt={darkMode ? 'dark mode icon' : 'light mode icon'}
        />
      </button>
    </div>
  );
}
