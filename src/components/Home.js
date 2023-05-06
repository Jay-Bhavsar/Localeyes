import React from 'react';
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
    <div>hello this is Home</div>
    <Link to="/login">Login</Link>
    </>
  )
}

export default Home