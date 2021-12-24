import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function PortfolioProvider({ children }) {
  const [stateA, setStateA] = useState([]);

  const CONTEXT_VALUE = {
    stateA,
    setStateA,
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
