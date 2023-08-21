import "./styles/navItem.css";

const NavItem = ({ children, className, onMobileMenu }) => {
  return (
    <li onClick={onMobileMenu} className={className}>
      {children}
    </li>
  );
};

export default NavItem;
