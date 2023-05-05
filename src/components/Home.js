import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

function Home() {
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
    hello {user&&user.email}
    <div>Home</div>
    <button onClick={handleLogout} >Log Out</button>
    </>
  )
}

export default Home