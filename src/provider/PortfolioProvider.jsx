import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState([]);

  const CONTEXT_VALUE = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [],
  );

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
