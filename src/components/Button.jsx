const Button = ({ handleClick, children, icon }) => {
  return (
    <button onClick={handleClick} className="social-btn">
      {icon && <img src={icon} alt="icon" />} {children}
    </button>
  );
};

export default Button;
