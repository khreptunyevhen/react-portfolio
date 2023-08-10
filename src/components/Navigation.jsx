import NavItem from "./NavItem";
import { info } from "../source/info";

import "./styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        {info.navigation.map((item, index) => (
          <NavItem key={`nav-item-${index}`}>{item}</NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
