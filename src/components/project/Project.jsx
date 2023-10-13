import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import './style.css';

const ProjectImpl = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className='project'>
        <img src={img} alt={title} className='project__image' />
        <h3 className='project__title'>{title} </h3>
      </li>
    </NavLink>
  );
};

export const Project = memo(ProjectImpl);
