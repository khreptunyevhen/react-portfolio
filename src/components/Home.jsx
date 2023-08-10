import "./styles/home.css";
import Button from "./Button";

const Home = () => {
  return (
    <section className="home">
      <div className="container home__inner">
        <div className="home__info">
          <h1 className="home__title">
            <strong>Hi</strong>, my name is
          </h1>
          <p className="home__name">Yevhen Khreptun.</p>
          <p className="home__description">
            I&apos;m a Full-Stack Developer based in Montreal.
            <strong> I love what I do</strong>.
          </p>
        </div>
        <Button>Contact</Button>
      </div>
    </section>
  );
};

export default Home;
