import Form from "../components/Form";
import FormHeader from "../components/FormHeader";
import BlueBox from "../components/BlueBox";
import Alert from "../components/Alert";
import Abstraction from "../assets/Abstraction.png";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login, errors } = useAuth();

  return (
    <div className="container">
      <BlueBox />
      <div className="form-container">
        {errors && <Alert message={errors} />}
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
