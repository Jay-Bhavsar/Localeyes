import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from "../../Home/userNavbar";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form5Data, setForm5Data] = useState({});
  const [form5Submitted, setForm5Submitted] = useState(
    localStorage.getItem('form5Submitted') === 'true'
  );
  useEffect(() => {
    const checkAndCreateDocument = async () => {
      if (form5Submitted) {
        localStorage.setItem('form5Submitted', 'true');
      }
    };

    checkAndCreateDocument();
  }, [form5Submitted]);
  const handleForm5Submit = async (e) => {
    e.preventDefault();
    setForm5Submitted(true);

    try {
      await formsCollectionRef.doc("combinedForm").update({
        form5: form5Data,
      });
      alert("Form 5 submitted successfully!");
      console.log("Form 5 submitted successfully!");
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
        <form action="" className="" onSubmit={handleForm5Submit}>
          
          <center>
            <h2 className="mt-16 text-lg font-bold">Declaration</h2>
          </center>
          <div className="flex flex-col w-[50%] bg-blue-200">
            {/* <label className="font-bold">Type of Research:</label> */}

            <div className="flex flex-col">
                <p>I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it.</p>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="Declaration"
                  value="Agree"
                  checked={form5Data.Declaration === "Agree"}
                  onChange={handleForm5InputChange}
                  disabled={form5Submitted}

                />
                <span className="ml-2">Agree</span>
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
          <button type="submit bg-red-900" disabled={form5Submitted}>Submit</button>
        </form>
      </center>
    </>
  );
}

export default Fifth;
