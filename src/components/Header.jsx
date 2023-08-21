import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "./Button";
import Logo from "./Logo";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "./styles/header.css";

const Header = ({ themeMode, setThemeMode }) => {
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
        <Logo themeMode={themeMode} />
        <Navigation />
        <div className="header__buttons">
          <Link to={"contacts"}>
            <Button buttonStyles="button">Hire me</Button>
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
        </div>
        {/* TODO: mobile menu */}
      </div>
    </header>
  );
};

export default Header;
