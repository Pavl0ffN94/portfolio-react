import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { projects } from '../helpers/pojectList';
import webIcon from './../icons/web-icon.svg';
import btnGit from './../icons/git_min.svg';

const ProjectImpl = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title_1'> {project.title} </h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className='project-details__cover'
          />

          <div className='project-details__desc'>
            <p>Skills:{project.skills}</p>
          </div>
          <div className='btn__wrapper'>
            <a
              target='_blank'
              rel='noreferrer'
              href={project.gitHabLink}
              className='btn-outline'>
              <img src={btnGit} alt='git_min' />
              GitHab repo
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={project.webLink}
              className='btn-outline'>
              <img className='web-icon' src={webIcon} alt='git_min' />
              website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export const Project = memo(ProjectImpl);
