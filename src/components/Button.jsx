import "./styles/buttons.css";

const Button = ({ children, buttonStyles = "" }) => {
  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
