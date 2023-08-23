import SectionTitle from "./SectionTitle";
import AboutDescription from "./AboutDescription";
import AboutSkills from "./AboutSkills";

import "./styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle>
          <h2 className="title">
            <span className="title__text">About me</span>
            <span className="title__shadow">Skills</span>
          </h2>
        </SectionTitle>
        <div className="about__wrapper">
          <AboutDescription />
          <AboutSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
