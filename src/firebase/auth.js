import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return ([result, err] = Error(
    createUserWithEmailAndPassword(auth, email, password)
  )).ToastPromise("Creating User", result);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return ([result, err] = Error(
    signInWithEmailAndPassword(auth, email, password)
  ));
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return ([result, err] = Error(signInWithPopup(auth, provider)));
};

export const doSignOut = async () => {
  return auth.signOut();
};
