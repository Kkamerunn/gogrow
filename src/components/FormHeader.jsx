import { useState } from "react";
import Button from "../components/Button";
import GoogleIcon from "../assets/google_icon.png";
import FacebookIcon from "../assets/facebook_icon.png";
import useAuth from "../hooks/useAuth";

const FormHeader = ({ heading }) => {
  const options = [
    { value: "english", text: "English (UK)" },
    { value: "spanish", text: "Spanish (ES)" },
  ];
  const [selected, setSelected] = useState("");
  const { loginWithGoogle, loginWithFacebook } = useAuth();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <select id="language" value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <h1>{heading}</h1>
      <div className="buttons-container">
        <Button
          handleClick={loginWithGoogle}
          children={"Signup with Google"}
          icon={GoogleIcon}
        />
        <Button
          handleClick={loginWithFacebook}
          children={"Signup with Facebook"}
          icon={FacebookIcon}
        />
      </div>
      <h2>- or -</h2>
    </>
  );
};

export default FormHeader;
