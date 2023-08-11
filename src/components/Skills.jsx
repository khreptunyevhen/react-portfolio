import "./styles/skills.css";

const Skills = ({ skills }) => {
  return (
    <ul className="skills__menu">
      {skills.map((skill, i) => (
        <li key={`skill-${i}`} className="skills__item">
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
