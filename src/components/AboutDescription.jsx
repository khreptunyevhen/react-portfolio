import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./styles/aboutDescription.css";
import pdf from "../assets/Yevhen_Khreptun_CV.pdf";

const AboutDescription = () => {
  return (
    <div className="about__description description">
      <h2 className="description__title">
        I am a <span>Full-Stack Developer</span>
      </h2>
      <p className="description__text">
        Hello there! 👋
        <br />
        <br />
        I&apos;m Yevhen Khreptun, a highly motivated and ambitious{" "}
        <span>Full-Stack Developer</span> with a passion for creating robust and
        user-friendly web applications. I thrive in collaborative environments
        and love tackling challenging problems with innovative solutions
      </p>
      <a href={pdf} target="__blank">
        <Button buttonStyles="button">
          <FontAwesomeIcon icon={faDownload} /> Resume
        </Button>
      </a>
    </div>
  );
};

export default AboutDescription;
