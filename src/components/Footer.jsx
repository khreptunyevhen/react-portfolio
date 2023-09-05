import Socials from "./Socials";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__socials-block">
            <p className="footer__socials-title">
              You can <span>find</span> and <span>follow</span> me.
            </p>
            <Socials />
          </div>
          <div className="footer__code">
            <p className="footer__code-text">
              You can see the{" "}
              <Link
                to={"https://github.com/khreptunyevhen/react-portfolio"}
                className="footer__code-link"
                target="__blank"
              >
                code
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
