import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectsTypeFilter from "./ProjectsTypeFilter";
import ProjectsBox from "./ProjectsBox";

import "./styles/portfolio.css";

import { info } from "../source/info.js";

const Portfolio = () => {
  const { projects } = info;

  const [allProjects, setAllProjects] = useState(projects);

  const projectTypes = allProjects.map((project) => project.type);

  return (
    <section className="portfolio">
      <div className="container">
        <SectionTitle>Portfolio</SectionTitle>
        <ProjectsTypeFilter projectTypes={projectTypes} />
        <ProjectsBox allProjects={allProjects} />
      </div>
    </section>
  );
};

export default Portfolio;
