import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function ProtectedRoute({ children }) {
  let { user } = useUserAuth();
  if (user) {
    sessionStorage.setItem("isUserLoggedIn", true);
  }
  const userLoggedIn = sessionStorage.getItem("isUserLoggedIn");
  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
