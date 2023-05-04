import {createContext, useEffect} from "react";
import { useContext,useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase"
import Signup from "../components/Signup";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const[user,setUser] = useState("")
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
     });
     return ()=>{
        unsubscribe();
     }
    },[]);
    return <userAuthContext.Provider value={{signUp}}>{children}</userAuthContext.Provider>

    
}



export function useUserAuth(){
    return useContext(userAuthContext);
}