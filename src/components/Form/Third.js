import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from "../Home/userNavbar";
import Footer from "../Home/Footer";
const loader = require("../img/loader.gif");

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
      console.error("Error submitting Form 2:", error);
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
                <h4>
                  Title in Catalogue<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="catalog_title"
                  value={form3Data.catalog_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  Title of MSS<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="MSS_title"
                  value={form3Data.MSS_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  Given Title<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="given_title"
                  value={form3Data.given_title || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  Subject<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="subject"
                  value={form3Data.subject || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  Author<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="author"
                  value={form3Data.author || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  MSS OWNER<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="MSS_owner"
                  value={form3Data.MSS_owner || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
                />
              </label>
              <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                <h4>
                  Scribe<span className="text-red-600">*</span>:
                </h4>
                <input
                  type="text"
                  name="scribe"
                  value={form3Data.scribe || ""}
                  onChange={handleForm3InputChange}
                  // className="m-4 bg-blue-400"
                  disabled={form3Submitted}
                  required
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
                Date of Commencement:
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
                Estimated Duration-{" "}
                <span className="text-red-700">
                  Note: Expected duration of at least two years from
                  commencement of the study/ as per university rules and
                  regulations{" "}
                </span>{" "}
                (Eg :3 Year, 2 Months):
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
                    value="incomplete"
                    checked={form3Data.status === "incomplete"}
                    onChange={handleForm3InputChange}
                    disabled={form3Submitted}
                    required
                  />
                  <span className="ml-2">Incomplete</span>
                </label>
                {/* Add the new radio button with a text option */}
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="status"
                    value="custom"
                    checked={form3Data.status === "custom"}
                    onChange={handleForm3InputChange}
                    disabled={form3Submitted}
                    required
                  />
                  <span className="ml-2">Custom Status</span>
                </label>
                {/* Add the text input for the custom option */}
                {form3Data.status === "custom" && (
                  <label className="flex items-center p-2">
                    <span className="ml-2">Please specify:</span>
                    <input
                      type="text"
                      name="custom_status"
                      value={form3Data.custom_status || ""}
                      onChange={handleForm3InputChange}
                      disabled={form3Submitted}
                      required
                    />
                  </label>
                )}
              </div>

              {/* Add more inputs as needed */}

              <button type="submit bg-red-900" disabled={form3Submitted}>
                Submit
              </button>
            </form>
          ) : (
            <p className="mt-10 mb-36">Please fill out the Second Form first</p>
          )}
        </center>
      </center>
      <Footer />
    </>
  );
}

export default Third;
