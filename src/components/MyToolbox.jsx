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
      <section className="toolbox-title">
        <div>
          <span className="html-tag">{'<h2>'}</span>
          <h2>My Toolbox</h2>
          <span className="html-tag">{'</h2>'}</span>
        </div>
        <div>
          <span className="html-tag">{'<p>'}</span>
          <p>
            The skills, tools and technologies I use to bring projects to life:
          </p>
          <span className="html-tag">{'</p>'}</span>
        </div>
      </section>
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
