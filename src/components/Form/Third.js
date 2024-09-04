import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from "../Home/userNavbar";
import Footer from "../Home/Footer";
const loader = require("../img/loader.gif");

// Initialize Firebase
const firebaseConfig = {
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

function Third() {
  const Userid = sessionStorage.getItem("uid");
  const Rid = localStorage.getItem("researchid");

  const [form3Data, setForm3Data] = useState({});
  const [form3Submitted, setForm3Submitted] = useState(
    localStorage.getItem("form3Submitted") === "true"
  );
  const [isStep3, setIsStep3] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isDataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    const checkStep3 = async () => {
      try {
        const formDoc = await formsCollectionRef.doc(Rid).get();
        const formData = formDoc.data();
        if (formData.step === 3) {
          setIsStep3(true);
        }
        setLoading(false);
        setDataAvailable(true);
      } catch (error) {
        console.error("Error retrieving form data:", error);
        setLoading(false);
        setDataAvailable(false);
      }
    };

    checkStep3();
  }, [Rid]);

  const handleForm3Submit = async (e) => {
    e.preventDefault();
    setForm3Submitted(true);

    try {
      await formsCollectionRef.doc(Rid).update({
        form3: form3Data,
        step: 4,
      });
      alert("Form 3 submitted successfully!");
      console.log("Form 3 submitted successfully!");
      setForm3Data({}); // Reset form data
    } catch (error) {
      console.error("Error submitting Form 3:", error);
      setLoading(false);
      setDataAvailable(false);
    }
  };

  const handleForm3InputChange = (e) => {
    setForm3Data({
      ...form3Data,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return (
      <div>
        <center>
          <div>
            <img src={loader} alt="" />
          </div>
        </center>
      </div>
    );
  }

  if (!isDataAvailable) {
    return <div>Fill out the first form</div>;
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
            Monetary Support <span className="text-red-700">(if Any)-</span>
            Primary Sponsorship
          </h2>
          <br />
          {isStep3 ? (
            <form onSubmit={handleForm3Submit}>
              {/* Form fields here */}
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Name:
                <input
                  type="text"
                  name="Prim_Sponsorship_name"
                  value={form3Data.Prim_Sponsorship_name || ""}
                  onChange={handleForm3InputChange}
                  disabled={form3Submitted}
                />
              </label>
              {/* Other form fields... */}

              <div className="flex flex-col w-[50%] bg-blue-200">
                <center>
                  <h2 className="text-lg font-bold">
                    Status<span className="text-red-600">*</span>:
                  </h2>
                </center>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="status"
                    value="Complete"
                    checked={form3Data.status === "Complete"}
                    onChange={handleForm3InputChange}
                    disabled={form3Submitted}
                    required
                  />
                  <span className="ml-2">Complete</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="status"
                    value="Incomplete"
                    checked={form3Data.status === "Incomplete"}
                    onChange={handleForm3InputChange}
                    disabled={form3Submitted}
                    required
                  />
                  <span className="ml-2">Incomplete</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="status"
                    value="Other"
                    checked={form3Data.status === "Other"}
                    onChange={handleForm3InputChange}
                    disabled={form3Submitted}
                    required
                  />
                  <span className="ml-2">Other</span>
                  {form3Data.status === "Other" && (
                    <input
                      type="text"
                      name="otherStatusDetail"
                      value={form3Data.otherStatusDetail || ""}
                      onChange={handleForm3InputChange}
                      disabled={form3Submitted}
                      placeholder="Please specify"
                      className="ml-2 p-2 border rounded"
                    />
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 p-2 bg-green-500 text-white rounded"
                disabled={form3Submitted}
              >
                Submit
              </button>
            </form>
          ) : (
            <div>Please complete the previous steps first.</div>
          )}
        </center>
        <Footer />
      </center>
    </>
  );
}

export default Third;
