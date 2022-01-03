import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Aos from 'aos';
import portfolio from '../services/ProjectsData';
import 'aos/dist/aos.css';

export default function ProjectCard() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      {portfolio.map(
        ({
          name, image, description, tools, liveProject, githubCode,
        }) => (
          <div className="project-card" data-aos="fade-up">
            <img src={image} alt={name} className="project-preview" />
            <div className="project-card-info">
              <div className="project-name-tools">
                <div className="project-name">
                  <h4>{name}</h4>
                  <p>{description}</p>
                </div>
                <div className="project-tools">
                  {tools.map((tool) => (
                    <button type="button">{tool}</button>
                  ))}
                </div>
              </div>
              <div className="project-buttons">
                <a href={liveProject} target="_blank" rel="noreferrer">
                  <button type="button" className="project-view">
                    <span>View Project</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </a>
                <a href={githubCode} target="_blank" rel="noreferrer">
                  <button type="button">
                    <span>View Code</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
