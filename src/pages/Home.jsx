import useAuth from "../hooks/useAuth";

const Home = () => {
  const { logOut, auth } = useAuth();
  const username = auth.currentUser.displayName;

  return (
    <>
      <h1>Hi, {username}</h1>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default Home;
