import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { info } from "../source/info";
import "./styles/footer.css";

const Footer = () => {
  const { socialLinks } = info;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__socials-block">
            <p className="footer__socials-title">
              You can <span>find</span> and <span>follow</span> me.
            </p>
            <ul className="footer__socials socials">
              {socialLinks.map((social, i) => {
                return (
                  <li
                    className="socials__item"
                    key={`social-${social.id}-${i}`}
                  >
                    <a
                      className="socials__link"
                      href={social.url}
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__code">
            <p className="footer__code-text">
              You can see{" "}
              <a
                className="footer__code-link"
                href="https://github.com/khreptunyevhen/react-portfolio"
                target="__blank"
              >
                code
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
