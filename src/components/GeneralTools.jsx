import React from 'react';
import {
  SiVisualstudiocode, SiGit, SiGithub, SiTrello,
} from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';
import { RiDeviceLine } from 'react-icons/ri';

export default function GeneralTools() {
  return (
    <div className="general-container">
      <p>General</p>
      <ul className="languages-container">
        <span className="html-tag">{'<ul>'}</span>
        <li>
          <div>
            <SiVisualstudiocode />
          </div>
          <span>VS Code</span>
        </li>
        <li>
          <div>
            <SiGit />
          </div>
          <span>Git</span>
        </li>
        <li>
          <div>
            <SiGithub />
          </div>
          <span>Github</span>
        </li>
        <li>
          <div>
            <SiTrello />
          </div>
          <span>Trello</span>
        </li>
        <li>
          <div>
            <FaTerminal />
          </div>
          <span>Command Line</span>
        </li>
        <li>
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
