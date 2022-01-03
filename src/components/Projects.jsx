import React, {
  useContext, useEffect, lazy, Suspense,
} from 'react';
import Aos from 'aos';
import PortfolioContext from '../context/PortfolioContext';
import ScrollIndicator from './ScrollIndicator';
import Loading from './Loading';
import '../styles/Projects.css';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const { darkMode } = useContext(PortfolioContext);

  const ProjectCard = lazy(() => import('./ProjectCard'));

  return (
    <section
      className={darkMode ? 'projects-wrapper-dark' : 'projects-wrapper-light'}
      id="projects"
    >
      <div className="projects-title">
        <div>
          <span data-aos="fade-right" className="html-tag">
            {'<h2>'}
          </span>
          <h2 data-aos="flip-up">Portfolio</h2>
          <span data-aos="fade-left" className="html-tag">
            {'</h2>'}
          </span>
        </div>
      </div>
      <span className="html-tag">{'<section>'}</span>
      <div className="projects-container">
        <Suspense fallback={<Loading />}>
          <ProjectCard />
        </Suspense>
      </div>
      <span className="html-tag">{'</section>'}</span>
      <ScrollIndicator />
    </section>
  );
}
