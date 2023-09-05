import { useEffect } from "react";
import "./styles/navItem.css";

import { info } from "../source/info";

const NavItem = ({ children, className, onMobileMenu, activeTab }) => {
  const { navigation } = info;

  useEffect(() => {
    document.title = `YK | ${navigation.at(activeTab).title}`;

    return () => `YK | Personal portfolio`;
  }, [navigation, activeTab]);

  return (
    <li onClick={onMobileMenu} className={className}>
      {children}
    </li>
  );
};

export default NavItem;
