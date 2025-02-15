// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBf6Uv1EWXdvVVU5g4hZPojndkxb-xhhts",
  authDomain: "jackedbox-games.firebaseapp.com",
  projectId: "jackedbox-games",
  storageBucket: "jackedbox-games.firebasestorage.app",
  messagingSenderId: "823414314347",
  appId: "1:823414314347:web:79ed89bdfb76c4d164282e",
  measurementId: "G-5NW11M3TPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const User = () => {};
