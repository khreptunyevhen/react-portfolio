import SmallProject from "./SmallProject";

import "./styles/projectsBox.css";

const ProjectsBox = ({ allProjects }) => {
  return (
    <div className="portfolio__projects projects">
      {allProjects.map((project, i) => (
        <SmallProject key={`project-${project.img}-${i}`} project={project} />
      ))}
    </div>
  );
};

export default ProjectsBox;
