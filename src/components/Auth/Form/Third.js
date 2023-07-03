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

function Third() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Userid = sessionStorage.getItem("uid");
  const Rid = localStorage.getItem("researchid");

  const [form3Data, setForm3Data] = useState({});
  const [form3Submitted, setForm3Submitted] = useState(
    localStorage.getItem("form3Submitted") === "true"
  );
  const [isStep3, setIsStep3] = useState(false); // Added state to track if step 2 is available

  useEffect(() => {
    const checkStep3 = async () => {
      try {
        const formDoc = await formsCollectionRef.doc(Rid).get();
        const formData = formDoc.data();
        if (formData.step === 3) {
          setIsStep3(true);
        }
      } catch (error) {
        console.error("Error retrieving form data:", error);
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
      console.error("Error submitting Form 2:", error);
    }
  };

  const handleForm3InputChange = (e) => {
    setForm3Data({
      ...form3Data,
      [e.target.name]: e.target.value,
    });
  };

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
          <h2 className="font-bold">Primary Sponsorship</h2>
          <br />
          {isStep3 ? (
            <form onSubmit={handleForm3Submit}>
              <label className="flex flex-col  p-2 bg-blue-200 w-[50%] font-bold">
                Name:
                <input
                  type="text"
                  name="Prim_Sponsorship_name"
                  value={form3Data.Prim_Sponsorship_name || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Address:
                <input
                  type="text"
                  name="Prim_Sponsorship_address"
                  value={form3Data.Prim_Sponsorship_address || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <br />
              <br />
              <h2 className="font-bold">BASIC DATA OF Manuscript</h2>
              <br />
              <br />

              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Title in Catalogue:
                <input
                  type="text"
                  name="catalog_title"
                  value={form3Data.catalog_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Title of MSS:
                <input
                  type="text"
                  name="MSS_title"
                  value={form3Data.MSS_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Given Title:
                <input
                  type="text"
                  name="given_title"
                  value={form3Data.given_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={form3Data.subject || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Author:
                <input
                  type="text"
                  name="author"
                  value={form3Data.author || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                MSS Owner:
                <input
                  type="text"
                  name="MSS_owner"
                  value={form3Data.MSS_owner || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Scribe:
                <input
                  type="text"
                  name="scribe"
                  value={form3Data.scribe || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>

              <br />
              <br />
              <h2 className="font-bold">
                Technical Section - Manuscript Details
              </h2>
              <br />
              <br />
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                topic:
                <input
                  type="text"
                  name="Manu_Topic"
                  value={form3Data.Manu_Topic || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Subject:
                <input
                  type="text"
                  name="Manu_Subject"
                  value={form3Data.Manu_Subject || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Size of manuscript in centimetres Length/Width (E.g.: 24x14) :
                <input
                  type="text"
                  name="Manu_size"
                  value={form3Data.Manu_size || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>

              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Binding Details:
                <input
                  type="text"
                  name="Manu_binding"
                  value={form3Data.Manu_binding || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>

              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Date of Commencement/Collection:
                <input
                  type="text"
                  name="date_of_collection"
                  value={form3Data.date_of_collection || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                Estimated Duration(Eg :3 Year, 2 Months):
                <input
                  type="text"
                  name="duration"
                  value={form3Data.duration || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                />
              </label>

              <div className="flex flex-col w-[50%] bg-blue-200">
                <center>
                  <center>
                    <h2 className="text-lg font-bold ">Status</h2>
                  </center>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="status"
                      value="Complete"
                      checked={form3Data.status === "Complete"}
                      onChange={handleForm3InputChange}
                      disabled={form3Submitted}
                    />
                    <span className="ml-2">Complete</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="status"
                      value="incomplete"
                      checked={form3Data.status === "incomplete"}
                      onChange={handleForm3InputChange}
                      disabled={form3Submitted}
                    />
                    <span className="ml-2">Incomplete</span>
                  </label>
                </center>
              </div>

              {/* Add more inputs as needed */}

              <button type="submit bg-red-900" disabled={form3Submitted}>
                Submit
              </button>
            </form>
          ) : (
            <p>Please fill out the Second Form first</p>
          )}
        </center>
      </center>
      <Footer />
    </>
  );
}

export default Third;
