import Button from "./Button";
import { Link } from "react-router-dom";

import "./styles/smallProject.css";

const SmallProject = ({ project, themeMode }) => {
  const image =
    themeMode === "dark" ? project.img.light.at(0) : project.img.dark.at(0);

  return (
    <div className="project">
      <div className="project__img">
        <img src={image} alt={project.title} />
      </div>
      <div className="project__description">
        <h2 className="project__title">{project.title}</h2>
        <p className="project__type">{project.type}</p>
      </div>
      <Link to={`/portfolio/${project.idLink}`}>
        <Button dataText="More" buttonStyles="button"></Button>
      </Link>
    </div>
  );
};

export default SmallProject;
