import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBf6Uv1EWXdvVVU5g4hZPojndkxb-xhhts",
  authDomain: "jackedbox-games.firebaseapp.com",
  projectId: "jackedbox-games",
  storageBucket: "jackedbox-games.firebasestorage.app",
  messagingSenderId: "823414314347",
  appId: "1:823414314347:web:79ed89bdfb76c4d164282e",
  measurementId: "G-5NW11M3TPF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
