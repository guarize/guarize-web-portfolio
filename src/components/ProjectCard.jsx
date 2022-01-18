import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import portfolio from '../services/ProjectsData';
import 'aos/dist/aos.css';

export default function ProjectCard() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const isDesktop = useMediaQuery({ query: '(min-width: 1250px)' });

  return (
    <>
      {portfolio.map(
        (
          {
            name, image, description, tools, liveProject, githubCode,
          },
          index,
        ) => (
          <div
            className={`project-card card-trigger-${index}`}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor={
              index === 0 || isDesktop ? undefined : `.card-trigger-${index - 1}`
            }
            data-aos-anchor-placement="top-center"
            key={index}
          >
            <img src={image} alt={name} className="project-preview" />
            <div className="project-card-info">
              <div className="project-name-tools">
                <div className="project-name">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <div className="project-tools">
                  {tools.map((tool) => (
                    <button type="button" key={tool}>{tool}</button>
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
