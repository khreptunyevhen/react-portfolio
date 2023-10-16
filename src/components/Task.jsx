import { Link } from "react-router-dom";
import Button from "./Button";

import "./styles/task.css";

function Task({ challenge }) {
  const { title, techMain, imgs } = challenge;

  return (
    <div className="task">
      <div className="task__img">
        <img src={imgs.at(0)} alt={title} />
      </div>
      <div className="task__description">
        <h2 className="task__title">{title}</h2>
        <ul className="task__tech">
          {techMain.map((tech, index) => (
            <li className="task__tech-item skills__item" key={tech + index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/try-it/${title.toLowerCase().split(" ").join("-")}`}>
        <Button dataText="Let's try" buttonStyles="button"></Button>
      </Link>
    </div>
  );
}

export default Task;
