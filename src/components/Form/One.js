import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import "firebase/compat/storage";
import { redirect } from "react-router-dom";

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

function One() {
  const Userid = sessionStorage.getItem("uid");

  const [form1Data, setForm1Data] = useState({});
  const [form1Submitted, setForm1Submitted] = useState(
    localStorage.getItem("form1Submitted") === "true"
  );

  useEffect(() => {
    const checkAndCreateDocument = async () => {
      if (form1Submitted) {
        localStorage.setItem("form1Submitted", "true");
      }
    };
    checkAndCreateDocument();
  }, [form1Submitted]);

  function generateAlphanumericCode(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const prefix = "AMMRI";
    let code = prefix;

    for (let i = 0; i < length - prefix.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  }

  const codeLength = 10;
  const alphanumericCode = generateAlphanumericCode(codeLength);
  console.log(alphanumericCode);

  async function handleForm1Submit(e) {
    e.preventDefault();
    // setform1Submitted(true);
    setForm1Submitted(true);
    try {
      const storageRef = firebase.storage().ref();
      const fileInput = document.getElementById("authorizationDocument");
      const file = fileInput.files[0];
      redirect('/form')

      if (file) {
        const fileRef = storageRef.child(
          `authorizationDocuments/${alphanumericCode}`
        );
        await fileRef.put(file);
        const downloadUrl = await fileRef.getDownloadURL();
        form1Data.authorizationDocumentUrl = downloadUrl;
      }

      await formsCollectionRef.doc(alphanumericCode).set({
        form1: form1Data,
        form1Submitted: true,
        Rid: alphanumericCode,
        uid: Userid,
        approved: false,
        rejected: false,
        step: 2,
      });
      alert("Form 1 submitted successfully!");
      console.log("Form 1 submitted successfully!");
      setForm1Data({}); // Reset form data
      localStorage.setItem("researchid", alphanumericCode);
      return alphanumericCode;
    } catch (error) {
      console.error("Error submitting Form 1:", error);
    }
  }

  function handleForm1InputChange(e) {
    setForm1Data({
      ...form1Data,
      [e.target.name]: e.target.value,
    });
  }
  // const [form1Submitted, setform1Submitted] = useState(false);

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
        <form action="" className="" onSubmit={handleForm1Submit}>
          <label className="flex flex-col bg-blue-200 w-[50%] p-2">
            <h2 className="font-bold">
              Public Title of Study <span className="text-red-600">*</span>:
            </h2>
            <input
              type="text"
              name="public_title"
              value={form1Data.public_title || ""}
              onChange={handleForm1InputChange}
              disabled={form1Submitted}
              required
              // className="m-4 bg-blue-200"
            />
          </label>

          <label className="flex flex-col bg-blue-200 w-[50%] p-2">
            <h2 className="font-bold">
              Scientific Title of Study<span className="text-red-600">*</span>:
            </h2>
            <input
              type="text"
              name="sci_title"
              value={form1Data.sci_title || ""}
              onChange={handleForm1InputChange}
              disabled={form1Submitted}
              required
              // className="m-4 bg-blue-200"
            />
          </label>
          <center>
            <h2 className="mt-16 text-lg font-bold">
              Type of Research<span className="text-red-600">*</span>
            </h2>
          </center>
          <div className="flex flex-col w-[50%] bg-blue-200">
            {/* <label className="font-bold">Type of Research:</label> */}

            <div className="flex flex-col">
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="collection"
                  checked={form1Data.type_of_research === "collection"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Collection</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="Catalog"
                  checked={form1Data.type_of_research === "Catalog"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Catalouging</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="translation"
                  checked={form1Data.type_of_research === "translation"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Translation</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="Transliteration"
                  checked={form1Data.type_of_research === "Transliteration"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Transliteration</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="Transcription"
                  checked={form1Data.type_of_research === "Transcription"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Transcription</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="Dicephering"
                  checked={form1Data.type_of_research === "Dicephering"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Dicephering</span>
              </label>
              <label className="flex items-center p-2">
                <input
                  type="radio"
                  name="type_of_research"
                  value="custom"
                  checked={form1Data.type_of_research === "custom"}
                  onChange={handleForm1InputChange}
                  disabled={form1Submitted}
                  required
                />
                <span className="ml-2">Others</span>
              </label>
              {form1Data.type_of_research === "custom" && (
                <label className="flex items-center p-2">
                  <span className="ml-2">Please specify:</span>
                  <input
                    type="text"
                    name="custom_research"
                    value={form1Data.custom_research || ""}
                    onChange={handleForm1InputChange}
                    disabled={form1Submitted}
                    required
                  />
                </label>
              )}
              <label htmlFor="" className="p-2 bg-blue-200">
                Attach an authorization document from the Institute/ repository,
                where the MSS is collected. Files submitted:
                <input
                  type="file"
                  id="authorizationDocument"
                  name=""
                  disabled={form1Submitted}
                  required
                />
              </label>
            </div>
          </div>

          <button type="submit bg-red-900" disabled={form1Submitted}>
            Submit
          </button>
        </form>
      </center>

      <Footer />
    </>
  );
}

export default One;
