import React, { useState } from "react";
import "../Style/Login.css";
import Navbar from "../Home/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";
const logo = require("../img/logo.png");
function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleAdminlogin = async (e) => {
    e.preventDefault();
    setError("");

    // Check if the provided email and password match the admin credentials
    if (email === "admin1@gmail.com" && password === "qwertyuio") {
      try {
        await login(email, password);
        navigate("/adminallresearch");
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <center>
        <div className="bg-blue-600 w-[100%] shadow-xl md:w-[60%] text-white font-extrabold text-xl p-3">
          <h2>AMRRI PORTAL NIA JAIPUR</h2>
          <h2>Login to Apply</h2>
        </div>
        <div className="flex flex-col border-red-700 shadow-xl w-[100%] md:w-[60%] md:flex-row">
          {error && <div>{error}</div>}
          <div className="flex flex-col justify-center items-center w-[100%] md:w-[50%] p-4">
            <br />
            <img src={logo} alt="" className="w-[100px] h-[100px]" />
            <br />
            <h1 className="text-xl font-bold">
              National Institute of Ayurveda
            </h1>
            <h4 className="">
              Deemed to be University(De Novo) Ministry of AYUSH, Govt. of India
            </h4>
          </div>
         

          <form
            action=""
            onSubmit={handleAdminlogin}
            className=" flex flex-col justify-center w-[100%] md:w-[50%] h-[100%] shadow-xl"
          >
            <center>
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
            <button className="button">Admin Log In</button>

            <p className="mr-16">
              <Link to="/forgetpass" className="text-red-700-950">
                Forget Password
              </Link>
            </p>

           
            </center>
           
          </form>
        </div>
      </center>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Adminlogin;
