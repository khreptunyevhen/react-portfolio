import SectionTitle from "./SectionTitle";
import "./styles/try-it.css";
import { info } from "../source/info";
import Task from "./Task";

const { challenges } = info;

function TryIt() {
  if (!challenges)
    return (
      <div className="try-it">
        <p className="container">Comming soon...</p>
      </div>
    );
  return (
    <section className="try-it">
      <div className="container">
        <SectionTitle>
          <h2 className="title">
            <span className="title__text">Try it</span>
            <span className="title__shadow">Tasks</span>
          </h2>
        </SectionTitle>
        <p className="try-it__description">
          <span>Welcome here!</span>
          {`It's a spot for fellow developers.
        You can read interesting challenges, see how I solved them, or try them
        yourself. Let's learn, grow, and have fun tackling different problems
        together. Join me on this journey!`}
        </p>
        <div className="try-it__tasks">
          {challenges.map((challenge) => (
            <Task key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TryIt;
