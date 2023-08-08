import Navigation from "./Navigation";
import Button from "./Button";
import Logo from "./Logo";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import "./styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <Navigation />
        <div className="header__buttons">
          <Button>Hire me</Button>
          <DarkModeOutlinedIcon />
        </div>
        {/* TODO: mobile menu */}
      </div>
    </header>
  );
};

export default Header;
