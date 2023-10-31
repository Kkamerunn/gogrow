const Button = ({ handleClick, children, icon }) => {
  return (
    <button onClick={handleClick} className="social-btn">
      <img src={icon} alt="icon" /> {children}
    </button>
  );
};

export default Button;
