import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { info } from "../source/info";

import "./styles/navigation.css";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const receiveActiveTab = window.localStorage.getItem("active-tab");

    if (receiveActiveTab !== null) setActiveTab(JSON.parse(receiveActiveTab));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("active-tab", JSON.stringify(activeTab));
  }, [activeTab]);

  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        {info.navigation.map((item, index) => (
          <NavItem
            className={`navigation__menu-item${
              Number(activeTab) === index ? " active" : ""
            }`}
            key={`nav-item-${index}`}
          >
            <Link
              className={`nav-item${
                Number(activeTab) === index ? " active" : ""
              }`}
              onClick={() => {
                setActiveTab(index);
              }}
              to={item.link}
            >
              {item.title}
            </Link>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
