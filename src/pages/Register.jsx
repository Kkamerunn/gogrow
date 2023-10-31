import Form from "../components/Form";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import GoogleIcon from "../assets/google_icon.png";
import FacebookIcon from "../assets/facebook_icon.png";

const Register = () => {
  const { register, loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <>
      <div className="form-container">
        <h1>Create Account</h1>
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
        <Form signUpForm={true} actionSubmit={register} />
      </div>
    </>
  );
};

export default Register;
