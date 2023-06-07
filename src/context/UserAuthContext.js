import { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import userServices from "../components/services/user.services"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  function signUp(email, password, userData) {
    return createUserWithEmailAndPassword(auth, email, password).then((userCreds) => {
      userServices.addUsers(userCreds.user.uid, userData);
    })
  }
  function login(email, password) {
    console.log("Email", email);
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      alert("Welcome to AMRRI")
    });
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider value={{ user, signUp, login, logOut,googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
