import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import portfolio from '../services/ProjectsData';

export default function ProjectCard() {
  return (
    <>
      {portfolio.map(
        ({
          name, image, description, tools, liveProject, githubCode,
        }) => (
          <div className="project-card">
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
                    View Project
                    <HiOutlineArrowNarrowRight />
                  </button>
                </a>
                <a href={githubCode} target="_blank" rel="noreferrer">
                  <button type="button">
                    View Code
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
