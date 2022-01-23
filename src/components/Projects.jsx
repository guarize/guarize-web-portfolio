import React, {
  useContext, useEffect, lazy, Suspense,
} from 'react';
import Aos from 'aos';
import PortfolioContext from '../context/PortfolioContext';
import { Loading } from '.';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const { darkMode } = useContext(PortfolioContext);

  const ProjectCard = lazy(() => import('./ProjectCard'));

  const FeaturedProjects = lazy(() => import('./FeaturedProjects'));

  return (
    <section
      className={darkMode ? 'projects-wrapper-dark' : 'projects-wrapper-light'}
      id="projects"
    >
      <div className="projects-title">
        <div>
          <span data-aos="fade-right" data-aos-once className="html-tag">
            {'<h2>'}
          </span>
          <h2 data-aos="flip-up" data-aos-once>
            Portfolio
          </h2>
          <span data-aos="fade-left" data-aos-once className="html-tag">
            {'</h2>'}
          </span>
        </div>
      </div>
      <span className="html-tag">{'<section>'}</span>
      <Suspense fallback={<Loading />}>
        <FeaturedProjects />
      </Suspense>
      <div className="projects-notheworthy-heading">
        <span data-aos="fade-right" data-aos-once className="html-tag">
          {'<h3>'}
        </span>
        <h3 data-aos="flip-up" data-aos-once>
          Other Noteworthy Projects
        </h3>
        <span data-aos="fade-left" data-aos-once className="html-tag">
          {'</h3>'}
        </span>
      </div>
      <div className="projects-container">
        <Suspense fallback={<Loading />}>
          <ProjectCard />
        </Suspense>
      </div>
      <span className="html-tag">{'</section>'}</span>
    </section>
  );
}
