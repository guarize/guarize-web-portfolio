import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState(2);
  const [seeMoreProjects, setSeeMoreProjects] = useState({
    seeMore: false,
    projectsAmount: 6,
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const CONTEXT_VALUE = {
    darkMode,
    setDarkMode,
    featuredProjects,
    setFeaturedProjects,
    seeMoreProjects,
    setSeeMoreProjects,
  };

  return (
    <PortfolioContext.Provider value={CONTEXT_VALUE}>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
