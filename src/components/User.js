import React from 'react';
import Navbar from '../components/Home/Navbar'
import { useUserAuth } from '../context/UserAuthContext'

function User() {
  const {user,logOut}=useUserAuth();
  console.log(user);
  const handleLogout = async ()=>{
    try{
      await logOut();
    }
    catch(err){
      console.log(err.message);
    }
  }
  return (
    <>
    <Navbar/>
    hello {user&&user.email}
    <div>Home</div>
    <button onClick={handleLogout} >Log Out</button>
    </>
  )
}

export default User;