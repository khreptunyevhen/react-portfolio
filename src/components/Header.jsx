import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "./Button";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import MobileNavigation from "./MobileNavigation";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "./styles/header.css";

const Header = ({ themeMode, setThemeMode, activeTab, setActiveTab }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    const receiveTheme = window.localStorage.getItem("theme");
    if (receiveTheme !== null) setThemeMode(JSON.parse(receiveTheme));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(themeMode));
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <header>
      <div className="container">
        <Logo setActiveTab={setActiveTab} setMobileMenu={setMobileMenu} />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="header__buttons">
          <Link to={"contacts"} onClick={() => setActiveTab(3)}>
            <Button dataText="Hire me" buttonStyles="button"></Button>
          </Link>
          <Button handleToggleThemeMode={handleToggleThemeMode}>
            {themeMode === "light" ? (
              <DarkModeOutlinedIcon
                role="button"
                onClick={handleToggleThemeMode}
              />
            ) : (
              <LightModeOutlinedIcon
                role="button"
                onClick={handleToggleThemeMode}
              />
            )}
          </Button>
          <HamburgerMenu
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        </div>
        <MobileNavigation
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </header>
  );
};

export default Header;
