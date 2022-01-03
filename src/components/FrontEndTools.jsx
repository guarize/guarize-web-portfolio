import React, { useEffect } from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJest,
  SiBootstrap,
  SiRedux,
} from 'react-icons/si';
import Aos from 'aos';
import rtlLogo from '../assets/images/testing-library.svg';
import 'aos/dist/aos.css';

export default function FrontEndTools() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="front-end-container">
      <p data-aos="flip-up">Front-end</p>
      <ul className="languages-container">
        <span className="html-tag">{'<ul>'}</span>
        <li data-aos="fade-up" data-aos-delay="100">
          <div>
            <SiJavascript />
          </div>
          <span>JavaScript</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <div>
            <SiHtml5 />
          </div>
          <span>HTML5</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <div>
            <SiCss3 />
          </div>
          <span>CSS3</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <div>
            <SiReact />
          </div>
          <span>React.js</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <div>
            <SiJest />
          </div>
          <span>Jest</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <div>
            <img src={rtlLogo} alt="rtl logo" />
          </div>
          <span>Testing Library</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="700">
          <div>
            <SiBootstrap />
          </div>
          <span>Bootstrap</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="800">
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
