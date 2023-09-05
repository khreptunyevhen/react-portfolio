import "./styles/home.css";
import Button from "./Button";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";

// TODO: add picture to resume buttons

import pdf from "../assets/Yevhen_Khreptun_CV.pdf";
import { useEffect, useState } from "react";

const Home = () => {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        setAdvice(data.slip.advice);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    getAdvice();
  }, []);

  return (
    <section className="home">
      <div className="container home__inner">
        <HomeBox />
        <div className="home__buttons">
          <a href={pdf} target="__blank">
            <Button dataText={`Resume`} buttonStyles="button">
              {/* <FontAwesomeIcon icon={faDownload} /> */}
            </Button>
          </a>
          <Link to={"portfolio"}>
            <Button dataText="Projects" buttonStyles="button"></Button>
          </Link>
        </div>
        {isLoading ? (
          <p>Loading advice...</p>
        ) : (
          <blockquote className="home__advice">“{advice}”</blockquote>
        )}
      </div>
    </section>
  );
};

export default Home;

const HomeBox = () => {
  return (
    <div className="home__info">
      <h1 className="home__title">
        <strong>Hi</strong>, my name is
      </h1>
      <p className="home__name">Yevhen Khreptun.</p>
      <p className="home__description">
        I&apos;m a Web Developer based in Montreal.
        <strong> I love what I do</strong>.
      </p>
    </div>
  );
};
