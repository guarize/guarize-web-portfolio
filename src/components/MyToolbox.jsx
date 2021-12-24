import React from 'react';
import '../styles/MyToolbox.css';

function MyToolbox() {
  return (
    <section className="toolbox-wrapper">
      <div className="toolbox-title">
        <span className="html-tag">{'<h2>'}</span>
        <h2>My Toolbox</h2>
        <span className="html-tag">{'</h2>'}</span>
      </div>
      <span className="html-tag">{'<section>'}</span>
      <div>
        <p>Front-End</p>
      </div>
      <div>
        <p>General</p>
      </div>
      <span className="html-tag">{'</section>'}</span>
    </section>
  );
}

export default MyToolbox;
