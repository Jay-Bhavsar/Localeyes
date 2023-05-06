import React, { useState } from "react";
import "../components/Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login,googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/user");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async(e)=>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/user")
    }
    catch(err){
      setError(err.message);
    }
  }
  return (
    <>
      <div className="form">
        {error&& <div>{error}</div>}
        <form action="" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <p>
            Don't have a account? <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
