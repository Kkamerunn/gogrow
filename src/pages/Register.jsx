import Form from "../components/Form";
import FormHeader from "../components/FormHeader";
import BlueBox from "../components/BlueBox";
import Abstraction from "../assets/Abstraction.png";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();

  return (
    <div className="container">
      <BlueBox />
      <div className="form-container">
        <FormHeader heading={"Create Account"} />
        <Form signUpForm={true} actionSubmit={register} />
        <img src={Abstraction} alt="abstraction" className="abstraction" />
      </div>
    </div>
  );
};

export default Register;
