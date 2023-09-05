import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

import "./styles/aboutDescription.css";
import pdf from "../assets/Yevhen_Khreptun_CV.pdf";

const AboutDescription = () => {
  return (
    <div className="about__description description">
      <h2 className="description__title">
        I am a{" "}
        <TypeAnimation
          sequence={[
            "Web",
            1000,
            "Front End",
            1000,
            "Back End",
            1000,
            "Full Stack",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        Developer.
      </h2>
      <p className="description__text">
        Hello there! 👋
        <br />
        <br />
        I&apos;m Yevhen Khreptun, a highly motivated and ambitious{" "}
        <span>Web Developer</span> with a passion for creating robust and
        user-friendly web applications. I thrive in collaborative environments
        and love tackling challenging problems with innovative solutions.
      </p>
      <a href={pdf} target="__blank">
        <Button dataText="Resume" buttonStyles="button"></Button>
      </a>
    </div>
  );
};

export default AboutDescription;
