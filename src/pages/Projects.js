import Project from '../components/project/Project';

import {projects} from './../helpers/pojectList';

const Projects = () => {
  return (
    <main id="projects" className="section">
      <div className="container">
        <h2 className="title_1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
