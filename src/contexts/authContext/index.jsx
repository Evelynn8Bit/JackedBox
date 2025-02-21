import { useEffect, useState, useContext, createContext, useMemo } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [userLoggedIn, setUserLoggedIn] = useState(!!auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setUserLoggedIn(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = useMemo(
    () => ({ currentUser, userLoggedIn, loading }),
    [currentUser, userLoggedIn, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
