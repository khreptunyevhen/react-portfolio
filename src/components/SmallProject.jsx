import Button from "./Button";

import "./styles/smallProject.css";

const SmallProject = ({ project }) => {
  return (
    <div className="project">
      <div className="project__img">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="project__description">
        <h2 className="project__title">{project.title}</h2>
        <p className="project__type">{project.type}</p>
      </div>
      <Button dataText="More" buttonStyles="button"></Button>
    </div>
  );
};

export default SmallProject;
