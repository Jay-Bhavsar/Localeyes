import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";
import SecurityCode from "./SecurityCode";
const logo = require("../img/logo.png");

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [officialAddress, setOfficialAddress] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [gender, setGender] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });

  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("You have Signed In");
    setError("");
    setMessage("");

    const newUser = {
      officialAddress,
      lastname,
      firstname,
      email,
      gender,
      mobNo,
      role: "user",
    };
    console.log(newUser);

    try {
      await signUp(email, password, newUser);
      navigate("/login");
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

    
      <br />
      <br />
      {message?.msg && <div>{message?.msg}</div>}
      {error && <div>{error}</div>}
      <center>
        <div className="bg-blue-600 w-[100%] shadow-xl md:w-[40%] text-white font-extrabold text-xl p-3">
          <h2>AMRRI PORTAL NIA JAIPUR</h2>
          <h2>Registration for Portal</h2>
        </div>

        <div className="flex flex-col shadow-xl w-[100%] md:w-[40%] form">
          <center>
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
          </center>
         
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex justify-start w-[90%] md:w-[100%]"
          >
            {/* <h2 className="text-2xl text-blue-700">Applicant Registration</h2> */}
            <br />
            <br />
            <label className="w-[100%]">
              Email
              <span className="text-red-600">
                *(please recheck email id and mobile number before submission):
              </span>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>

            <br />
            <label className="w-[100%]">
              Password*:
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>

            <br />
            <label className="w-[100%]">
              Select Gender*:
              <br />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-[90%] bg-blue-700 p-2 rounded text-white"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female </option>
              </select>
            </label>

            <br />
            <label className="w-[100%]">
              Official Address with Name of Organization*:
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                onChange={(e) => {
                  setOfficialAddress(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>

            <br />
            <label className="w-[100%]">
              Firstname*:
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>

            <br />
            <label className="w-[100%]">
              Lastname*:
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>
            <br />
            <label className="w-[100%]">
              Only Ten Digit Mobile No:(please do not include '0' before number)
              <span className="text-red-600">
                {" "}
                *(please recheck email id and mobile number before submission of
                form):
              </span>
              <input
                type="tel"
                pattern="[0-9]{10}"
                name=""
                id=""
                onChange={(e) => {
                  setmobNo(e.target.value);
                }}
                className="w-[90%]"
                required
              />
            </label>

            {/* <SecurityCode correctCode="1234" onSuccess={handleSubmit} /> */}
<center>
<button className="button w-[90%]">Sign Up</button>

</center>
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </center>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Signup;
