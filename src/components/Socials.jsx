import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { info } from "../source/info";
import "./styles/socials.css";

const Socials = () => {
  const { socialLinks } = info;

  return (
    <ul className="footer__socials socials">
      {socialLinks.map((social, i) => {
        return (
          <li className="socials__item" key={`social-${social.id}-${i}`}>
            <a className="socials__link" href={social.url} target="__blank">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
