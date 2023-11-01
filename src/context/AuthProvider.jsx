import { createContext } from "react";
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
  const navigate = useNavigate();

  const register = async (email, password, fullname) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredentials, {
        displayName: fullname,
      });
      console.log(auth.currentUser);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const facebookProvider = new FacebookAuthProvider();
      await signInWithPopup(auth, facebookProvider);
      navigate("/home");
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
