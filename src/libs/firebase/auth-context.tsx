"use client"
import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebaseApp from "./config";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext<User | null>(null);

export const useAuth = () => {
  const user = useContext(AuthContext);

  if (!user) {
    // throw new Error('You must be authenticated');
  }

  return user;
};


interface AuthProviderProps {
  children?: ReactNode
}


const AuthProvider = ({ children } : AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,  (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;