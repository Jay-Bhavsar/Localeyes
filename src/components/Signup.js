import React, { useState } from "react";
import "../components/Style/Login.css";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar"



import  {useUserAuth}  from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const  {signUp}  = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate('/login')
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
    <Navbar/>
    {error && <div>{error}</div>}
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
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
          <button type="submit" className="button">Sign Up</button>
          <p>
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
