import Button from "../components/Button";
import GoogleIcon from "../assets/google_icon.png";
import FacebookIcon from "../assets/facebook_icon.png";
import useAuth from "../hooks/useAuth";

const FormHeader = ({ heading }) => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <>
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
