import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";
import userServices from "../services/user.services";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (
      address === "" ||
      username === "" ||
      firstname === "" ||
      lastname === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    const newUser = {
      username,
      address,
      lastname,
      firstname,
    };
    console.log(newUser);


    try {
      await userServices.addUsers(newUser);
      setMessage({ error: false, msg: "New user added successfully!" });
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      setMessage({ error: true, msg: err.message });
    }
      
    setAddress("");
    setUsername("");
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
      <br />
      {message?.msg && <div>{message?.msg}</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-row form">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-start w-[90%] md:w-[30%]"
        >
          <h2 className="text-2xl text-blue-700">Applicant Registration</h2>
          <br />
          <label for="countries" class="mr-42 mb-2 text-sm ">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[90%]"
          />
          <label for="countries" class="mr-42 mb-2 text-sm ">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%]"
          />
          <label for="countries" class="mr-42 mb-2 text-sm ">
            Address
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="w-[90%]"
          />

          <label for="countries" class="mr-42 mb-2 text-sm ">
            Username
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="w-[90%]"
          />
          <label for="countries" class="mr-42 mb-2 text-sm ">
            First Name
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="w-[90%]"
          />
          <label for="countries" class="mr-42 mb-2 text-sm ">
            Last Name
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            className="w-[90%]"
          />
          {/* <label for="countries" class="mr-42 mb-2 text-sm ">
            Select your country
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="College Name"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%]"
          /> */}
          {/* <label for="countries" class="mr-42 mb-2 text-sm ">
            Select your country
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="State"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%]"
          /> */}

          <button className="button">Sign Up</button>
          <p>
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
