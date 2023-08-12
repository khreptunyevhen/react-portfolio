import Button from "./Button";

import "./styles/smallProject.css";

const SmallProject = ({ project }) => {
  return (
    <div className="projects__item">
      <div className="project__img">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="projects__item-description">
        <h3 className="projects__item-title">{project.title}</h3>
        <p className="projects__item-text">{project.shortDescription}</p>
        <Button buttonStyles="button">See more</Button>
      </div>
    </div>
  );
};

export default SmallProject;
