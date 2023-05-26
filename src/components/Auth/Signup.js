import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
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
      <br />
      {error && <div>{error}</div>}
      <div className="flex flex-row form">
        <form action="" onSubmit={handleSubmit} className="flex justify-start w-[90%] md:w-[30%] bg-blue-200">
          <h2 className="text-2xl text-blue-700">Applicant Registration</h2>
          <br />
          <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
            Select your country
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[90%]"
          />
           <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
            Select your country
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
           <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
            Select your country
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%]"
          />
          <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
            Select your country
          </label>
          <select
            id="countries"
            className="w-[90%] m-2"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
          <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
            Select your country
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[90%]"
          />
           <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
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
          />
           <label
            for="countries"
            class="mr-42 mb-2 text-sm "
          >
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
          />

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
