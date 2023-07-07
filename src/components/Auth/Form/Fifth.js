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

function Fifth() {
  const Rid = localStorage.getItem("researchid");

  const [form5Data, setForm5Data] = useState({});
  const [form5Submitted, setForm5Submitted] = useState(
    localStorage.getItem("form5Submitted") === "true"
  );
  const [isStep5, setIsStep5] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isDataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    const checkStep5 = async () => {
      try {
        const formDoc = await formsCollectionRef.doc(Rid).get();
        const formData = formDoc.data();
        if (formData && formData.step === 5) {
          setIsStep5(true);
        }
        setLoading(false);
        setDataAvailable(true);
      } catch (error) {
        console.error("Error retrieving form data:", error);
        setLoading(false);
        setDataAvailable(false);
      }
    };

    checkStep5();
  }, [Rid]);

  const handleForm5Submit = async (e) => {
    e.preventDefault();
    setForm5Submitted(true);

    try {
      await formsCollectionRef.doc(Rid).update({
        form5: form5Data,
        step: 0,
      });
      alert("Form 5 submitted successfully!");
      console.log("Form 5 submitted successfully!");
      localStorage.clear();
      setForm5Data({}); // Reset form data
    } catch (error) {
      console.error("Error submitting Form 5:", error);
    }
  };

  const handleForm5InputChange = (e) => {
    setForm5Data({
      ...form5Data,
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
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        {isStep5 ? (
          <form onSubmit={handleForm5Submit}>
            <center>
              <h2 className="mt-16 text-lg font-bold">Declaration</h2>
            </center>
            <div className="flex flex-col w-[50%] bg-blue-200">
              <div className="flex flex-col">
                <p>
                  I hereby declare that the details furnished above are true and
                  correct to the best of my knowledge and belief and I undertake
                  to inform you of any changes therein, immediately. In case any
                  of the above information is found to be false or untrue or
                  misleading or misrepresenting, I am aware that I may be held
                  liable for it.
                </p>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="Declaration"
                    value="Agree"
                    checked={form5Data.Declaration === "Agree"}
                    onChange={handleForm5InputChange}
                    disabled={form5Submitted}
                  />
                  <span className="ml- 2">Agree</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="Declaration"
                    value="Disagree"
                    checked={form5Data.Declaration === "Disagree"}
                    onChange={handleForm5InputChange}
                    disabled={form5Submitted}
                  />
                  <span className="ml-2">Disagree</span>
                </label>
              </div>
            </div>
            <button type="submit" className="bg-blue-500" disabled={form5Submitted}>
              Submit
            </button>
          </form>
        ) : (
          <p className="mt-10 mb-36">Please fill out all the forms first</p>
        )}
      </center>
      <Footer />
    </>
  );
}

export default Fifth;
