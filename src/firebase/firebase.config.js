import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIbMWHmIwcTM91vRF60e9xqxdms4d_l9c",
  authDomain: "gogrow-56b05.firebaseapp.com",
  projectId: "gogrow-56b05",
  storageBucket: "gogrow-56b05.appspot.com",
  messagingSenderId: "343837051734",
  appId: "1:343837051734:web:f4c1dc58bdac3d22a4a4f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
