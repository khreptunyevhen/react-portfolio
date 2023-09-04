import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { info } from "../source/info.js";

const PortfolioProject = () => {
  const routeParams = useParams();
  const id = routeParams.id;

  const { projects } = info;

  const currentProject = projects
    .filter((project) => project.idLink === id)
    .at(0);

  return (
    <div className="container">
      <div
        className="current-project"
        style={{
          paddingTop: "200px",
        }}
      >
        <h2 className="current-project__title">{currentProject.title}</h2>
        <div className="current-project__wrapper">
          <div className="current-project__slider">
            <img src={`.${currentProject.img}`} alt={currentProject.title} />
          </div>
          <div className="current-project__description">
            <h3 className="skills__title">Project Info:</h3>
            <p>{currentProject.description}</p>
            <h3 className="skills__title">Project Details:</h3>
            <div>
              <h3 className="skills__title">
                {currentProject.technology.title}:
              </h3>
              <ul className="skills__menu">
                {currentProject.technology.skills.map((skill, index) => (
                  <li className="skills__item" key={`skill-${index}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <time
              className="current-project__date"
              dateTime={currentProject.time}
            >
              Date: {currentProject.time}
            </time>
            <div className="current-project__links">
              <p className="skills__title">
                URL:{" "}
                <Link
                  className="footer__code-link"
                  target="__blank"
                  to={currentProject.preview}
                >
                  Open
                </Link>
              </p>
              <p className="skills__title">
                Source code:{" "}
                <Link
                  className="footer__code-link"
                  target="__blank"
                  to={currentProject.code}
                >
                  Open
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
