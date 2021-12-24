import React from 'react';
import FrontEndTools from './FrontEndTools';
import '../styles/MyToolbox.css';
import GeneralTools from './GeneralTools';
import ScrollIndicator from './ScrollIndicator';

function MyToolbox() {
  return (
    <section className="toolbox-wrapper">
      <div className="toolbox-title">
        <span className="html-tag">{'<h2>'}</span>
        <h2>My Toolbox</h2>
        <span className="html-tag">{'</h2>'}</span>
      </div>
      <span className="html-tag">{'<section>'}</span>
      <FrontEndTools />
      <GeneralTools />
      <span className="html-tag">{'</section>'}</span>
      <ScrollIndicator />
    </section>
  );
}

export default MyToolbox;
