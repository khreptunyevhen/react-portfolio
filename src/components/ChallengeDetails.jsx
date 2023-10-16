import { useParams } from "react-router-dom";
import "./styles/challenge-details.css";
import { info } from "../source/info";
import { Link } from "react-router-dom";

const { challenges } = info;

function ChallengeDetails() {
  const { id } = useParams();

  if (!challenges) return null;

  const currentTask = challenges
    .filter((task) => task.title.toLowerCase().split(" ").join("-") === id)
    .at(0);

  const { title, techMain, description, links, tasks, imgs } = currentTask;

  return (
    <section className="challenge-details">
      <div className="container challenge-details__container">
        <div className="challenge-details__description">
          <ul className="challenge-details__skills">
            {techMain.map((skill) => (
              <li className="skills__item" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
          <h2 className="challenge-details__title">{title}</h2>
          <p className="challenge-details__info">{description}</p>
          <div className="challenge-details__links">
            {links.map((link, index) => (
              <div
                className="challenge-details__links-item"
                key={`${link.link}${index}`}
              >
                <h3>Solution for {link.tech}.</h3>
                <p>
                  View{" "}
                  <Link
                    target="_blank"
                    className="footer__code-link"
                    to={link.link}
                  >
                    DEMO
                  </Link>
                </p>
                <p>
                  View{" "}
                  <Link
                    target="_blank"
                    className="footer__code-link"
                    to={link.code}
                  >
                    Source code
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="challenge-details__img">
          <img src={`.${imgs.at(0)}`} alt={title} />
        </div>
        <div className="challenge-details__task">
          <h2 className="challenge-details__task-item">{tasks.title}</h2>
          <ul>
            {tasks.taskValues.map((value, index) => (
              <li key={`task-value-${index}`}>
                <span>{index + 1}.</span> {value}
              </li>
            ))}
          </ul>
          <div className="challenge-details__questions">
            <Link to={"/try-it"} className="footer__code-link">
              ⬅ See all tasks
            </Link>
            <Link to={"/contacts"} className="footer__code-link">
              Have questions?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengeDetails;
