import "./styles/home.css";
import Button from "./Button";
import HomeBox from "./HomeBox";
import { Link } from "react-router-dom";

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
            <Button dataText={`Resume`} buttonStyles="button"></Button>
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
