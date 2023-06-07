import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function ProtectedRoute({ children }) {
  let { user } = useUserAuth();
  if (user) {
    console.log(user.uid);
    console.log("user log in stored in sessionStorage");
    sessionStorage.setItem("isUserLoggedIn", true);
  }
  const userLoggedIn = sessionStorage.getItem("isUserLoggedIn");
  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
