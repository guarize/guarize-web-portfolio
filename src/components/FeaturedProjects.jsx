import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiOutlineExternalLink } from 'react-icons/hi';
import portfolio from '../services/ProjectsData';
import '../styles/FeaturedProjects.css';

function FeaturedProjects() {
  return (
    <section>
      <ul className="featured-projects">
        {portfolio
          .slice(0, 2)
          .map(
            (
              {
                name, image, description, tools, liveProject, githubCode,
              },
              index,
            ) => (
              <li
                className={
                  index % 2 === 0 ? 'feat-project-right' : 'feat-project-left'
                }
                data-aos={
                  index % 2 === 0 ? 'flip-right' : 'flip-left'
                }
                data-aos-once
              >
                <div className="feat-project-preview">
                  <img src={image} alt="project preview" />
                </div>
                <div
                  className={
                      index % 2 === 0
                        ? 'project-content-right'
                        : 'project-content-left'
                    }
                >
                  <div style={{ marginTop: '-30px', minWidth: '470px' }}>
                    <p className="feat-tag">Featured Project</p>
                    <h3>{name}</h3>
                    <div
                      className={
                          index % 2 === 0
                            ? 'project-description-right'
                            : 'project-description-left'
                        }
                    >
                      <p>{description}</p>
                    </div>
                    <section className="feat-tools-links">
                      <ul className="feat-project-tools">
                        {tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                      <section className="feat-project-links">
                        <a
                          href={githubCode}
                          aria-label="GitHub Link"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <VscGithubAlt />
                        </a>
                        <a
                          href={liveProject}
                          aria-label="Live Project Link"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <HiOutlineExternalLink />
                        </a>
                      </section>
                    </section>
                  </div>
                </div>
              </li>
            ),
          )}
      </ul>
    </section>
  );
}

export default FeaturedProjects;
