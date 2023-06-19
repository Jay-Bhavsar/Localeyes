import React, { useState } from "react";
import "../Style/Login.css";
import Navbar from "../Home/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/user");
      // navigate("/part1")
    } catch (err) {
      setError(err.message);
    }
    // try{
    //   await login('admin@gmail.com', 'admin@1234');
    //   navigate("/admin")
 
    // }catch(err){
    //   setError(err.message)
    // }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/user");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="form">
        {error && <div>{error}</div>}
        <form action="" onSubmit={handleSubmit} className="w-[90%] md:w-[30%] shadow-xl">
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[80%]"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[80%]"
          />
          <button className="button">Log In</button>

          {/* <button onClick={handleGoogleSignIn}>Login with Google</button> */}
          <p>
            Don't have a account? <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
