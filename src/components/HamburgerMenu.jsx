import "./styles/hamburgerMenu.css";

const HamburgerMenu = ({ mobileMenu, setMobileMenu }) => {
  const hamburgerClass = `hamburger${mobileMenu ? " active" : ""}`;
  return (
    <button
      className={hamburgerClass}
      onClick={() => setMobileMenu((is) => !is)}
    >
      <span className="hamburger__top"></span>
      <span className="hamburger__middle"></span>
      <span className="hamburger__bottom"></span>
    </button>
  );
};

export default HamburgerMenu;
