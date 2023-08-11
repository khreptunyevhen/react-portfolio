import SectionTitle from "./SectionTitle";
import AboutDescription from "./AboutDescription";
import AboutSkills from "./AboutSkills";

import "./styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle>About me</SectionTitle>
        <div className="about__wrapper">
          <AboutDescription />
          <AboutSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
