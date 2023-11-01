import useAuth from "../hooks/useAuth";
import Button from "../components/Button";

const Home = () => {
  const { logOut, auth } = useAuth();
  const username = auth.currentUser.displayName
    ? auth.currentUser.displayName
    : auth.currentUser.email.split("@")[0];

  return (
    <>
      <h1>Hi, {username}</h1>
      <Button handleClick={logOut} children={"Log out"} />
    </>
  );
};

export default Home;
