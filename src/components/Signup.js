import React, { useState } from "react";
import "../components/Style/Login.css";
import { Link } from "react-router-dom";

import  {useUserAuth}  from "../context/UserAuthContext";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const  signUp  = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already Registered? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
