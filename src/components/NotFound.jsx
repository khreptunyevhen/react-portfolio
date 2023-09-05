import Button from "./Button";
import { Link } from "react-router-dom";

import "./styles/notFound.css";

const NotFound = ({ setActiveTab }) => {
  return (
    <section className="not-found">
      <div className="container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Page not found!</p>
        <p className="not-found__text">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted!
        </p>
        <Link onClick={() => setActiveTab(0)} to={"/"}>
          <Button dataText="Back to home" buttonStyles="button"></Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
