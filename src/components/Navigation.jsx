import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { info } from "../source/info";

import "./styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        {info.navigation.map((item, index) => (
          <NavItem key={`nav-item-${index}`}>
            <Link to={item.link}>{item.title}</Link>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
