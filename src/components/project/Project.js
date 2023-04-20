import './style.css';
import ipAdressTrackerMin from './../../img/ipAdressTracker_min.png';

const Project = ({title, img}) => {
  return (
    <li className="project">
      <a href="./project-ip.html">
        <img src={img} alt={title} className="project__image" />
        <h3 className="project__title"> {title} </h3>
      </a>
    </li>
  );
};

export default Project;
