import Form from "../components/Form";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { register, loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <>
      <h1>Create Account</h1>
      <div>
        <Button handleClick={loginWithGoogle} children={"Signup with Google"} />
        <Button
          handleClick={loginWithFacebook}
          children={"Signup with Facebook"}
        />
      </div>
      <h2>or</h2>
      <Form signUpForm={true} actionSubmit={register} />
    </>
  );
};

export default Register;
