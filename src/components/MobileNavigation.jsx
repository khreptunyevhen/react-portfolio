import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import { info } from "../source/info";

import "./styles/mobileNavigation.css";

const MobileNavigation = ({ mobileMenu, setMobileMenu }) => {
  const handleMobileMenu = () => {
    document.body.style.overflow = "initial";

    setMobileMenu(false);
  };

  return (
    <div
      className="mobile-menu"
      style={{
        right: mobileMenu ? "0" : "-100%",
      }}
    >
      <ul>
        {info.navigation.map((item, index) => (
          <NavItem
            onMobileMenu={handleMobileMenu}
            className={"mobile-menu__item"}
            key={`mobile-menu-item-${index}`}
          >
            <Link to={item.link}>{item.title}</Link>
          </NavItem>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
