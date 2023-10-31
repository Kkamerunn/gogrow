import Form from "../components/Form";
import FormHeader from "../components/FormHeader";
import BlueBox from "../components/BlueBox";
import Abstraction from "../assets/Abstraction.png";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="container">
      <BlueBox />
      <div className="form-container">
        <FormHeader heading={"Log in"} />
        <Form actionSubmit={login} />
        <img
          src={Abstraction}
          alt="abstraction"
          className="abstraction img-login"
        />
      </div>
    </div>
  );
};

export default Login;
