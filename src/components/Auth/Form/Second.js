import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from "../../Home/userNavbar";
import Footer from "../../Home/Footer";

// Initialize Firebase
const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDXg6bof6EXM7TNfQjIQxYgKdR63SjURtE",
  authDomain: "amrri-cdeb4.firebaseapp.com",
  projectId: "amrri-cdeb4",
  storageBucket: "amrri-cdeb4.appspot.com",
  messagingSenderId: "739660662641",
  appId: "1:739660662641:web:5dc201b3c017dd80ccd8d0",
  measurementId: "G-0BT7XZRL7E",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const formsCollectionRef = db.collection("forms");

function Second() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Userid = sessionStorage.getItem("uid");
  const Rid = localStorage.getItem("researchid");

  const [form2Data, setForm2Data] = useState({});
  const [form2Submitted, setForm2Submitted] = useState(
    localStorage.getItem("form2Submitted") === "true"
  );
  const [isStep2, setIsStep2] = useState(false); // Added state to track if step 2 is available
  const [isLoading, setLoading] = useState(true);
  const [isDataAvailable, setDataAvailable] = useState(false);
  useEffect(() => {
    const checkStep2 = async () => {
      try {
        const formDoc = await formsCollectionRef.doc(Rid).get();
        const formData = formDoc.data();
        if (formData.step === 2) {
          setIsStep2(true);
        }
        setLoading(false);
        setDataAvailable(true);
      } catch (error) {
        console.error("Error retrieving form data:", error);
        setLoading(false);
        setDataAvailable(false);
      }
    };

    checkStep2();
  }, [Rid]);
  const handleForm2Submit = async (e) => {
    e.preventDefault();
    setForm2Submitted(true);

    try {
      await formsCollectionRef.doc(Rid).update({
        form2: form2Data,
        step:3
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isDataAvailable) {
    return <div>No data found.</div>;
  }

  return (
    <>
      <center>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center oneliner">
          <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
        </div>
        <center>
          <h2 className="font-bold">
            Details of Principal investigator or overall trail coordinator
            (Multi-center study)
          </h2>

          {isStep2 ? (
             <form onSubmit={handleForm2Submit}>
             <label className="flex flex-col  p-2 bg-blue-200 w-[50%] font-bold">
               Name:
               <input
                 type="text"
                 name="name"
                 value={form2Data.name || ""}
                 onChange={handleForm2InputChange}
                 // className="m-4 bg-blue-200"
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
               />
             </label>
             <br />
             <br />
             <h2 className="font-bold">
               Details of Contact person (Public Query)
             </h2>
             <br />
             <br />
             <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
               Name:
               <input
                 type="text"
                 name="Public_Query_name"
                 value={form2Data.Public_Query_name || ""}
                 onChange={handleForm2InputChange}
                 // className="m-4 bg-blue-200"
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
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
                 disabled={form2Submitted}
               />
             </label>
             {/* Add more inputs as needed */}
             <button type="submit bg-red-900" disabled={form2Submitted}>
               Submit
             </button>
           </form>
        ) : (
          <p className="mt-10 mb-36">Please fill out the Form 1 first</p>
        )}
          <br />
       
        </center>
      </center>

      <Footer />
    </>
  );
}

export default Second;
