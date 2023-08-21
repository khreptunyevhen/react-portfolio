import { useEffect } from "react";

import "./styles/hamburgerMenu.css";

const HamburgerMenu = ({ mobileMenu, setMobileMenu }) => {
  const hamburgerClass = `hamburger${mobileMenu ? " active" : ""}`;

  const hangleToggleMobileMenu = () => {
    if (mobileMenu) {
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }

    setMobileMenu((is) => !is);
  };

  useEffect(() => {
    document.body.style = "overflow: initial";
  }, []);

  return (
    <button className={hamburgerClass} onClick={hangleToggleMobileMenu}>
      <span className="hamburger__top"></span>
      <span className="hamburger__middle"></span>
      <span className="hamburger__bottom"></span>
    </button>
  );
};

export default HamburgerMenu;
