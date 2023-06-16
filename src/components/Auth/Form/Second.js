import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from '../../Home/userNavbar'

// Initialize Firebase
const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDXg6bof6EXM7TNfQjIQxYgKdR63SjURtE",
  authDomain: "amrri-cdeb4.firebaseapp.com",
  projectId: "amrri-cdeb4",
  storageBucket: "amrri-cdeb4.appspot.com",
  messagingSenderId: "739660662641",
  appId: "1:739660662641:web:5dc201b3c017dd80ccd8d0",
  measurementId: "G-0BT7XZRL7E"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const formsCollectionRef = db.collection("forms");

function Second() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form2Data, setForm2Data] = useState({});
  useEffect(() => {
    const checkAndCreateDocument = async () => {
      const docRef = db.collection("forms").doc("newform");

      await docRef.set({
        form1: {},
      });
    };

    checkAndCreateDocument();
  }, []);
  const handleForm2Submit = async (e) => {
    e.preventDefault();

    try {

      await formsCollectionRef.doc("combinedForm").update({
        form2: form2Data,
      });
 alert("Form 2 submitted successfully!");
      console.log("Form 2 submitted successfully!");
      setForm2Data({}); // Reset form data
    } catch (error) {
      console.error("Error submitting Form 2:", error);
    }
  };

  const handleForm2InputChange = (e) => {
    setForm2Data({
      ...form2Data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <center>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        <h2 className="font-bold">Details of Principal investigator or overall trail coordinator (Multi-center study)</h2>
        <br />
        <form onSubmit={handleForm2Submit}>
          <label className="flex flex-col  p-2 bg-blue-200 w-[50%] font-bold">
            Name:
            <input
              type="text"
              name="name"
              value={form2Data.name || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Designation:
            <input
              type="text"
              name="designation"
              value={form2Data.designation || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Affiliation:
            <input
              type="text"
              name="Affiliation"
              value={form2Data.Affiliation || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Address:
            <input
              type="text"
              name="Address"
              value={form2Data.Address || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Phone Number:
            <input
              type="text"
              name="Phno"
              value={form2Data.Phno || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Email-id:
            <input
              type="text"
              name="email"
              value={form2Data.email || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <br /><br />
          <h2 className="font-bold">Details of Contact person (Public Query)</h2>
          <br /><br />
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Name:
            <input
              type="text"
              name="Public_Query_name"
              value={form2Data.Public_Query_name || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Designation:
            <input
              type="text"
              name="Public_Query_designation"
              value={form2Data.Public_Query_designation || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
            Affiliation:
            <input
              type="text"
              name="Public_Query_affiliation"
              value={form2Data.Public_Query_affiliation || ""}
              onChange={handleForm2InputChange}
              // className="m-4 bg-blue-200"
            />
          </label>
          {/* Add more inputs as needed */}
          <button type="submit bg-red-900">Submit</button>
        </form>
      </center>
    </center>
  );
}

export default Second;
