import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import FrontEndTools from './FrontEndTools';
import '../styles/MyToolbox.css';
import GeneralTools from './GeneralTools';
import ScrollIndicator from './ScrollIndicator';
import PortfolioContext from '../context/PortfolioContext';
import 'aos/dist/aos.css';

function MyToolbox() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const { darkMode } = useContext(PortfolioContext);

  return (
    <section
      className={darkMode ? 'toolbox-wrapper-dark' : 'toolbox-wrapper-light'}
      id="toolbox"
    >
      <section className="toolbox-title">
        <div>
          <span data-aos="fade-right" className="html-tag">
            {'<h2>'}
          </span>
          <h2 data-aos="flip-up">My Toolbox</h2>
          <span data-aos="fade-left" className="html-tag">
            {'</h2>'}
          </span>
        </div>
        <div>
          <span data-aos="fade-down" className="html-tag html-trigger">
            {'<p>'}
          </span>
          <p data-aos="flip-up">
            The skills, tools and technologies I use to bring projects to life:
          </p>
          <span
            data-aos="fade-up"
            data-aos-anchor=".html-trigger"
            className="html-tag"
          >
            {'</p>'}
          </span>
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
