import "./styles/buttons.css";

const Button = ({ buttonStyles = "", dataText, children }) => {
  return (
    <button data-text={dataText} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
