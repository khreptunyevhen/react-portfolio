import { useState } from "react";
import SectionTitle from "./SectionTitle";
// import ProjectsTypeFilter from "./ProjectsTypeFilter";
import ProjectsBox from "./ProjectsBox";

import "./styles/portfolio.css";

import { info } from "../source/info.js";

const Portfolio = ({ themeMode }) => {
  const { projects } = info;

  const [allProjects, setAllProjects] = useState(projects);

  const projectTypes = allProjects.map((project) => project.type);

  return (
    <section className="portfolio">
      <div className="container">
        <SectionTitle>
          <h2 className="title">
            <span className="title__text">Portfolio</span>
            <span className="title__shadow">Works</span>
          </h2>
        </SectionTitle>
        {allProjects.length > 0 ? (
          <>
            {/* <ProjectsTypeFilter projectTypes={projectTypes} /> */}
            <ProjectsBox allProjects={allProjects} themeMode={themeMode} />
          </>
        ) : (
          <p>Coming soon... 😰</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
