import { create } from "@mui/material/styles/createTransitions";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
const auth1 = getAuth();
export const signIn = () => {
  const session = localStorage.getItem("session") || false;
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("signed in successfully");
      localStorage.setItem("session", true);
      window.location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error");
    });
};
export const signUpWithEmailAndPassword = (email, pwd) => {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then((userCredentials) => {
      const user = userCredentials.user;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const signInwithEmail = (email, pwd) => {
  signInWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      console.log("signed in successfully");
      return "success";
    })
    .catch((err) => {
      console.log(err);
      return "error";
    });
};
