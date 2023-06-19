import React from "react";
import Navbar from "../../components/Home/userNavbar";
import { Link } from "react-router-dom";

function User() {
  return (
    <>
      <Navbar />
      <br /> <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        <br />

        {/* <Link to="/form">
          <button className="p-2 text-white bg-blue-500 rounded-md">
            Fill Out the AMMRI FORM
          </button>
        </Link> */}
        <br />
        {/* <button className="p-4 mb-6 text-white bg-blue-500 rounded-md">Final Submission</button> */}
      </center>
    </>
  );
}

export default User;
