import Skills from "./Skills";

import { info } from "../source/info";

import "./styles/aboutSkills.css";

const AboutSkills = () => {
  const { skillBoxes } = info;

  return (
    <div className="about__skills skills">
      {skillBoxes.map((box, i) => (
        <div key={`skill-box-${box.id}-${i}`} className="skills__block">
          <h2 className="skills__title">{box.title}</h2>
          <Skills skills={box.skills} />
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
