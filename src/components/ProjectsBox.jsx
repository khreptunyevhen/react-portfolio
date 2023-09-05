import SmallProject from "./SmallProject";

import "./styles/projectsBox.css";

const ProjectsBox = ({ allProjects, themeMode }) => {
  return (
    <div className="portfolio__projects projects">
      {allProjects.map((project, i) => (
        <SmallProject
          key={`project-${project.img}-${i}`}
          project={project}
          themeMode={themeMode}
        />
      ))}
    </div>
  );
};

export default ProjectsBox;
