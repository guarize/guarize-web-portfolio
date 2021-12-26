import React from 'react';
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiJest, SiBootstrap, SiRedux,
} from 'react-icons/si';
import rtlLogo from '../assets/images/testing-library.svg';

export default function FrontEndTools() {
  return (
    <div className="front-end-container">
      <p>Front-end</p>
      <ul className="languages-container">
        <span className="html-tag">{'<ul>'}</span>
        <li>
          <div>
            <SiJavascript />
          </div>
          <span>JavaScript</span>
        </li>
        <li>
          <div>
            <SiHtml5 />
          </div>
          <span>HTML5</span>
        </li>
        <li>
          <div>
            <SiCss3 />
          </div>
          <span>CSS3</span>
        </li>
        <li>
          <div>
            <SiReact />
          </div>
          <span>React.js</span>
        </li>
        <li>
          <div>
            <SiJest />
          </div>
          <span>Jest</span>
        </li>
        <li>
          <div>
            <img src={rtlLogo} alt="rtl logo" />
          </div>
          <span>Testing Library</span>
        </li>
        <li>
          <div>
            <SiBootstrap />
          </div>
          <span>Bootstrap</span>
        </li>
        <li>
          <div>
            <SiRedux />
          </div>
          <span>Redux</span>
        </li>
        <span className="html-tag">{'</ul>'}</span>
      </ul>
    </div>
  );
}
