import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import toast from "react-hot-toast";

// ✅ Fix: Proper async/await error handling
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return;
  } catch (error) {
    return;
  }
};
export const loginGoogle = async () => {
  toast.loading("Logging in with Google");
  doSignInWithGoogle().then((result) => {
    toast.dismiss();
    if (result instanceof Error) {
      toast.error("Failed to login with Google");
      return;
    }

    toast.success(`Welcome ${result.user.displayName}`);
  });
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    return error;
  }
};

export const doSignOut = async () => {
  return signOut(auth);
};
