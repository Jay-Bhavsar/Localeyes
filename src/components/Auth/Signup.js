import React, { useState } from "react";
import "../Style/Login.css";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar"



import  {useUserAuth}  from "../../context/UserAuthContext";
import Footer from "../Home/Footer";

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
    <br /><br /><br /><br /><br /><br /><br />
    {error && <div>{error}</div>}
      <div className="form">
        <form action="" onSubmit={handleSubmit} className="w-[90%] md:w-[30%]">
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
          <button className="button">Sign Up</button>
          <p>
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>

      <Footer/>
    </>
  );
}

export default Signup;
