import React from 'react'
import { useUserAuth } from "../../context/UserAuthContext";
import { redirect } from 'react-router-dom'


function Logout() {
    const { logOut } = useUserAuth();
    logOut()
    sessionStorage.clear()
    alert("You've been logged out successfully")
    redirect('/')
  return (
    <div>
        <a href="/">GO back home</a>
    </div>
  )
}

export default Logout