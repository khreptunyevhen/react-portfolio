import Button from "./Button";

import "./styles/projectsTypeFilter.css";

const ProjectsTypeFilter = ({ projectTypes }) => {
  const types = ["All", ...projectTypes];

  return (
    <ul className="filter">
      {types.map((type, i) => (
        <li key={`project-type-${i}`}>
          <Button buttonStyles="button">{type}</Button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsTypeFilter;
