import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../Home/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [officialAddress, setOfficialAddress] = useState("");
  const [loginId, setLoginid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [newCompany, setnewCompany] = useState("");
  const [newAddress, setNewaddress] = useState("");
  const [verifierName, setVerifiername] = useState("");
  const [verifierAddress, setVerifieraddress] = useState("");
  const [verifierPhone, setverifierPhone] = useState("");
  const [verifierFax, setVerifierfax] = useState("");
  const [verifierEmail, setVerifieremail] = useState("");

  const [newCompanytype, setNewcompanytype] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });

  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const newUser = {
      loginId,
      officialAddress,
      lastname,
      firstname,
      email,
      gender,
      mobNo,
      designation,
      company,
      newCompany,
      newAddress,
      newCompanytype,
      verifierName,
      verifierAddress,
      verifierPhone,
      verifierFax,
      verifierEmail,
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

      <div className="text-center oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <br />
      <br />
      {message?.msg && <div>{message?.msg}</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-row form">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-start w-[90%] md:w-[32%] shadow-xl"
        >
          <h2 className="text-2xl text-blue-700">Applicant Registration</h2>
          <br />
          <br />
          <label className="w-[100%]">
            Email{" "}
            <span className="text-red-600">
              *(please recheck email id and mobile number before submission of
              form):
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
            Login Id*:
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setLoginid(e.target.value);
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
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setmobNo(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>
          <br />
          <label className="w-[100%]">
            Designation*:
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>

          <label className="w-[100%]">
            Company/Organisation*:
            <br />
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-[90%] bg-blue-700 p-2 rounded text-white"
              required
            >
              <option value="">NIL</option>
              <option value="company1">Company1</option>
              <option value="company2">Company2</option>
              <option value="company3">Company3</option>
            </select>
          </label>

          <br />
          <label className="w-[100%]">
            Register New Company/Organisation:
            <br />
            <span className="text-red-600">
              in case Company not available in list:{" "}
            </span>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setnewCompany(e.target.value);
              }}
              className="w-[90%]"
            />
          </label>
          <br />
          <label className="w-[100%]">
            Address & other Details:
            <br />
            <span className="text-red-600">
              in case Company not available in list:{" "}
            </span>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setNewaddress(e.target.value);
              }}
              className="w-[90%]"
            />
          </label>
          <br />
          <label className="w-[100%]">
            Company/Organisation type:
            <br />
            <span className="text-red-600">
              in case Company not available in list:
            </span>
            <br />
            <select
              value={newCompanytype}
              onChange={(e) => setNewcompanytype(e.target.value)}
              className="w-[90%] bg-blue-700 p-2 rounded text-white"
              required
            >
              <option value="Pharmaceutical_industry_Indian">
                Pharmaceutical industry-Indian
              </option>
              <option value="Pharmaceutical_industry_Global">
                Pharmaceutical industry-Global
              </option>
              <option value="Contract_research_Organization">
                Contract research Organization
              </option>
              <option value="Research_Institution">Research Institution</option>
              <option value="Research_institution_and_hospital">
                Research institution and hospital
              </option>
              <option value="Government_funding_agency">
                Government funding agency
              </option>
              <option value="Government_Medical_College">
                Government Medical College
              </option>
              <option value="Private_Medical_College">
                Private Medical College
              </option>
              <option value="Private_Hospital_clinic">
                Private Hospital/clinic
              </option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <label className="w-[100%]">
            Verifier Name:*
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setVerifiername(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>
          <br />
          <label className="w-[100%]">
            Verifier's Official Address with Name of Organization: *
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setVerifieraddress(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>
          <br />
          <label className="w-[100%]">
            Verifier Phone: *
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setverifierPhone(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>
          <br />
          <label className="w-[100%]">
            Verifier Fax:
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setVerifierfax(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>
          <br />
          <label className="w-[100%]">
            Verifier Email:
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setVerifieremail(e.target.value);
              }}
              className="w-[90%]"
              required
            />
          </label>

          <button className="button w-[90%]">Sign Up</button>
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
