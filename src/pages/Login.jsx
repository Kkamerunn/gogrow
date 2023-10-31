import Form from "../components/Form";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";

const Login = () => {
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <>
      <div>Sign in</div>
      <Button handleClick={loginWithGoogle} children={"Signin with Google"} />
      <Button
        handleClick={loginWithFacebook}
        children={"Signin with Facebook"}
      />
      <Form actionSubmit={login} />
    </>
  );
};

export default Login;
