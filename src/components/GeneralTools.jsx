import React, { useEffect } from 'react';
import Aos from 'aos';
import {
  SiVisualstudiocode, SiGit, SiGithub, SiTrello,
} from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';
import { RiDeviceLine } from 'react-icons/ri';
import 'aos/dist/aos.css';

export default function GeneralTools() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="general-container">
      <p data-aos="flip-up">General</p>
      <ul className="languages-container">
        <span className="html-tag">{'<ul>'}</span>
        <li data-aos="fade-up" data-aos-delay="100">
          <div>
            <SiVisualstudiocode />
          </div>
          <span>VS Code</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <div>
            <SiGit />
          </div>
          <span>Git</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <div>
            <SiGithub />
          </div>
          <span>Github</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <div>
            <SiTrello />
          </div>
          <span>Trello</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <div>
            <FaTerminal />
          </div>
          <span>Command Line</span>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <div>
            <RiDeviceLine />
          </div>
          <span>Responsive Websites</span>
        </li>
        <span className="html-tag">{'</ul>'}</span>
      </ul>
    </div>
  );
}
