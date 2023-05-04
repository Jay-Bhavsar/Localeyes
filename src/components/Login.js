import React from "react";
import "../components/Style/Login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <>
      <div className="form">
        <form action="">
        <h1>Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button type="submit">Log In</button>
          <p>Don't have a account? <Link to="/signup"> Sign Up</Link></p>
        </form>
      </div>
    </>
  );
}

export default Login;
