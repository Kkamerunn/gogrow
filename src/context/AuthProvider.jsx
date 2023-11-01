import { createContext, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleError = (error) => {
    const newError = error.message.split(":")[1];
    setErrors(newError);
    setTimeout(() => {
      setErrors("");
    }, 3000);
  };

  const register = async (email, password, fullname) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      await updateProfile(userCredentials.user, {
        displayName: fullname,
      });
      navigate("/home");
    } catch (error) {
      handleError(error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      handleError(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      handleError(error);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const facebookProvider = new FacebookAuthProvider();
      await signInWithPopup(auth, facebookProvider);
      navigate("/home");
    } catch (error) {
      handleError(error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        loginWithFacebook,
        logOut,
        auth,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
