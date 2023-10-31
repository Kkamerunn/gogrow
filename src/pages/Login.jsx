import Form from "../components/Form";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import GoogleIcon from "../assets/google_icon.png";
import FacebookIcon from "../assets/facebook_icon.png";

const Login = () => {
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <>
      <div className="form-container">
        <h1>Log in</h1>
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
        <Form actionSubmit={login} />
      </div>
    </>
  );
};

export default Login;
