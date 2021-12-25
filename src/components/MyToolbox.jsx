import React, { useContext } from 'react';
import FrontEndTools from './FrontEndTools';
import '../styles/MyToolbox.css';
import GeneralTools from './GeneralTools';
import ScrollIndicator from './ScrollIndicator';
import PortfolioContext from '../context/PortfolioContext';

function MyToolbox() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <section
      className={darkMode ? 'toolbox-wrapper-dark' : 'toolbox-wrapper-light'}
      id="toolbox"
    >
      <div className="toolbox-title">
        <span className="html-tag">{'<h2>'}</span>
        <h2>My Toolbox</h2>
        <span className="html-tag">{'</h2>'}</span>
      </div>
      <section className="toolbox-skills">
        <span className="html-tag">{'<section>'}</span>
        <FrontEndTools />
        <GeneralTools />
        <span className="html-tag">{'</section>'}</span>
      </section>
      <ScrollIndicator />
    </section>
  );
}

export default MyToolbox;
