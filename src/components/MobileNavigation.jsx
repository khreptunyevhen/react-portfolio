import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import { info } from "../source/info";

import "./styles/mobileNavigation.css";

const MobileNavigation = ({
  mobileMenu,
  setMobileMenu,
  activeTab,
  setActiveTab,
}) => {
  const handleMobileMenu = (index) => {
    document.body.style.overflow = "initial";

    setActiveTab(index);
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
            onMobileMenu={() => handleMobileMenu(index)}
            className={`mobile-menu__item${
              Number(activeTab) === index ? " active" : ""
            }`}
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
