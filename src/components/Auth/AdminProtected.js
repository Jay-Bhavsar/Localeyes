import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function AdminProtectedRoute({ children }) {
  let { user } = useUserAuth();
  
  // Assuming `user` contains the user's email and ID
  const isAdmin = user && user.email === "admin1@gmail.com";

  if (isAdmin) {
    console.log("Admin logged in and stored in sessionStorage");
    sessionStorage.setItem("isAdminLoggedIn", true);
  }
  
  const adminLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
  
  if (!adminLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default AdminProtectedRoute;
