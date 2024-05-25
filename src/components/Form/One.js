import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { redirect } from "react-router-dom";
import Navbar from "../Home/userNavbar";
import Footer from "../Home/Footer";
import "firebase/compat/storage";
import DefaultSidebar from "../Home/Sidebar";
import Formsidebar from "../Home/Formsidebar";
import jsPDF from "jspdf";

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

  const [selectedScript, setSelectedScript] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [customScript, setCustomScript] = useState("");

  const [selectedlanguage, setSelectedlanguage] = useState("");
  const [customlanguage, setCustomlanguage] = useState("");

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
  // console.log(alphanumericCode);

  async function handleForm1Submit(e) {
    e.preventDefault();
    setForm1Submitted(true);

    try {
      const storageRef = firebase.storage().ref();
      const fileInput = document.getElementById("authorizationDocument");
      const file = fileInput.files[0];

      // Generate PDF content
      const pdf = new jsPDF();
      pdf.setFontSize(8);
      pdf.text("Form 1 Details", 10, 10);
      pdf.text(`User Id: ${form1Data.uid}`, 10, 20);
      pdf.text(`Research Id: ${alphanumericCode}`, 10, 30);
      pdf.text(`Public Title: ${form1Data.public_title}`, 10, 40);
      pdf.text(`Scientific Title: ${form1Data.sci_title}`, 10, 50);
      pdf.text(`Type of Research: ${form1Data.type_of_research}`, 10, 60);
      pdf.text(`Name: ${form1Data.name}`, 10, 70);
      pdf.text(`Affiliation: ${form1Data.Affiliation}`, 10, 80);
      pdf.text(`Phone No.: ${form1Data.Phno}`, 10, 90);
      pdf.text(`Designation: ${form1Data.designation}`, 10, 100);
      pdf.text(`Email: ${form1Data.email}`, 10, 110);
      pdf.text(`Name: ${form1Data.name}`, 10, 120);
      pdf.text(`Affiliation: ${form1Data.Public_Query_affiliation}`, 10, 130);
      pdf.text(`Designation: ${form1Data.Public_Query_designation}`, 10, 140);
      pdf.text(`Affiliation: ${form1Data.Public_Query_affiliation}`, 10, 150);
      pdf.text(`Name: ${form1Data.Public_Query_name}`, 10, 160);
      pdf.text(`MSS Owner: ${form1Data.MSS_owner}`, 10, 170);
      pdf.text(`MSS Title: ${form1Data.MSS_title}`, 10, 180);
      pdf.text(`Manuscript Topic: ${form1Data.Manu_Topic}`, 10, 190);
      pdf.text(`Manuscript Binding: ${form1Data.Manu_binding}`, 10, 200);
      pdf.text(`Manuscript Subject: ${form1Data.Manu_Subject}`, 10, 210);
      pdf.text(`Manuscript Size: ${form1Data.Manu_size}`, 10, 220);
      pdf.text(
        `Primary Sponsorship Address: ${form1Data.Prim_Sponsorship_address}`,
        10,
        230
      );
      pdf.text(
        `Primary Sponsorship Name: ${form1Data.Prim_Sponsorship_name}`,
        10,
        240
      );
      pdf.text(`Author: ${form1Data.author}`, 10, 250);
      pdf.text(`Catalog Title: ${form1Data.catalog_title}`, 10, 260);
      pdf.text(`Date of Collection: ${form1Data.date_of_collection}`, 10, 270);
      pdf.text(`Duration: ${form1Data.duration}`, 10, 280);
      pdf.text(`Given title: ${form1Data.given_title}`, 10, 290);
      pdf.addPage("letter");
      pdf.text(`Scribe: ${form1Data.scribe}`, 10, 10);
      pdf.text(`Status: ${form1Data.status}`, 10, 20);
      pdf.text(`Subject: ${form1Data.subject}`, 10, 30);
      pdf.text(`Date Samvat: ${form1Data.Date_Samvat}`, 10, 40);
      pdf.text(`Language: ${form1Data.Language}`, 10, 50);
      pdf.text(`MSS Year: ${form1Data.MSS_Year}`, 10, 60);
      pdf.text(`MSS Condition: ${form1Data.MSS_condition}`, 10, 70);
      pdf.text(`Manuscript Date: ${form1Data.Manu_date_christian}`, 10, 80);
      pdf.text(`Material: ${form1Data.Material}`, 10, 90);
      pdf.text(`City/Village: ${form1Data.city_village}`, 10, 100);
      pdf.text(`Data Date: ${form1Data.data_data}`, 10, 110);
      pdf.text(`Manuscript Source: ${form1Data.manu_source}`, 10, 120);
      pdf.text(`Place of Writing: ${form1Data.place_of_writing}`, 10, 130);
      pdf.text(`States/Union Terretory: ${form1Data.states_union}`, 10, 140);
      pdf.text(`Declaration: ${form1Data.Declaration}`, 10, 150);

      // Save PDF content to Firebase Storage
      const pdfBlob = pdf.output("blob");
      console.log(pdfBlob);
      const pdfRef = storageRef.child(
        `pdfs/form_data_${Userid}_${alphanumericCode}.pdf`
      );
      await pdfRef.put(pdfBlob);

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
        pdflink: `pdfs/form_data_${Userid}.${alphanumericCode}.pdf`,
      });

      window.location.href = "/user";
      alert("Your Research is Posted");
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
    const { name, value } = e.target;
    if (name === "Script") {
      setSelectedScript(value);
    } else if (name === "custom_script") {
      setCustomScript(value);
    }
    if (name === "Material") {
      setSelectedMaterial(value);
    } else if (name === "custom_material") {
      setSelectedMaterial(value);
    }

    if (name === "Language") {
      setSelectedlanguage(value);
    } else if (name === "custom_language") {
      setCustomlanguage(value);
    }
  }
  function handleFileChange(event) {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    const fileError = document.getElementById("fileError");

    if (file && file.size > maxSize) {
      fileError.textContent =
        "The file size exceeds the 2MB limit. Please upload a smaller file.";
      event.target.value = ""; // Clear the file input
    } else {
      fileError.textContent = "";
    }
  }
  // const [form1Submitted, setform1Submitted] = useState(false);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <div className="flex flex-row justify-start">
        <div className=" sidebar  w-[30%] justify-center items-center">
          <Formsidebar />
        </div>

        <div className="flex flex-col  shadow-xl w-[100%] md:w-[50%]">
          <center>
            <div className="bg-blue-600 w-[100%] shadow-xl  text-white font-extrabold text-xl p-3">
              <h2>AMRRI PORTAL NIA JAIPUR</h2>
              <h2>Submit your Research</h2>
            </div>
          </center>
          <center>
            <form action="" className="shadow-xl" onSubmit={handleForm1Submit}>
              <div className="flex   w-[100%] flex-row">
                <label className="flex flex-col w-[50%] p-2">
                  <h2 className="font-bold" id="part1">
                    1.Public Title of Study{" "}
                    <span className="text-red-600">*</span>:
                  </h2>
                  <input
                    type="text"
                    name="public_title"
                    value={form1Data.public_title || ""}
                    onChange={handleForm1InputChange}
                    required
                    // className="m-4 "
                  />
                </label>

                <label className="flex flex-col w-[50%] p-2">
                  <h2 className="font-bold">
                    2.Scientific Title of Study
                    <span className="text-red-600">*</span>:
                  </h2>
                  <input
                    type="text"
                    name="sci_title"
                    value={form1Data.sci_title || ""}
                    onChange={handleForm1InputChange}
                    required
                    // className="m-4 "
                  />
                </label>
              </div>

              <center>
                <h2 className="font-bold mt-9">
                  3.Type of Research<span className="text-red-600">*</span>
                </h2>
              </center>
              <center>
                <div className="flex flex-col md:flex-row w-[80%] justify-between">
                  <div className="flex flex-col md:m-4">
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="collation"
                        checked={form1Data.type_of_research === "collation"}
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Collation</span>
                    </label>
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="Catalog"
                        checked={form1Data.type_of_research === "Catalog"}
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Cataloguing </span>
                    </label>
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="translation"
                        checked={form1Data.type_of_research === "translation"}
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Translation</span>
                    </label>
                  </div>
                  <div className="flex flex-col md:m-4">
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="Transcription"
                        checked={form1Data.type_of_research === "Transcription"}
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Transcription</span>
                    </label>
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="Deciphering
                        "
                        checked={form1Data.type_of_research === "Deciphering"}
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Deciphering</span>
                    </label>
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="Transliteration"
                        checked={
                          form1Data.type_of_research === "Transliteration"
                        }
                        onChange={handleForm1InputChange}
                        required
                      />
                      <span className="ml-2">Transliteration</span>
                    </label>
                  </div>

                  <div className="flex flex-col md:m-4">
                    <label className="flex items-center p-2">
                      <input
                        type="radio"
                        name="type_of_research"
                        value="custom"
                        checked={form1Data.type_of_research === "custom"}
                        onChange={handleForm1InputChange}
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
                          required
                        />
                      </label>
                    )}
                  </div>
                </div>
                <div className="w-[100%]">
                  <label
                    htmlFor="authorizationDocument"
                    className="p-2 font-bold text-justify"
                  >
                    4. Attach an authorization document from the
                    Institute/repository, where the MSS is collected *. Files
                    submitted:
                    <input
                      type="file"
                      id="authorizationDocument"
                      name="authorizationDocument"
                      required
                      onChange={handleFileChange}
                    />
                  </label>
                  <p id="fileError" className="text-red-500"></p>
                </div>
              </center>

              <br />
              <br />
              {/* start */}
              <center>
                <h2 className="font-bold" id="part2">
                  Details of Principal investigator or overall trial coordinator
                  (Multi-center study)
                  <span className="text-red-600">*</span>
                </h2>
              </center>
              <div className="flex flex-row w-[100%] mt-10">
                <label className="flex flex-col p-2 font-bold w-[50%]">
                  <h4>
                    5.Name<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="name"
                    value={form1Data.name || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    {" "}
                    6.Designation<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="designation"
                    value={form1Data.designation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>

              <div className="flex-row flex w-[100%]">
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    7.Affiliation<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="Affiliation"
                    value={form1Data.Affiliation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    8.Address<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="Address"
                    value={form1Data.Address || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>
                    {" "}
                    9.Phone Number<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="Phno"
                    value={form1Data.Phno || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    {" "}
                    10.Email-id<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="email"
                    value={form1Data.email || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>
              {/* start */}
              <center>
                <h2 className="font-bold" id="part2">
                  Details of Co - investigator
                  <span className="text-red-600">*</span>
                </h2>
              </center>
              <div className="flex flex-row w-[100%] mt-10">
                <label className="flex flex-col p-2 font-bold w-[50%]">
                  <h4>
                    5.Name<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="CoinvestigatorName"
                    value={form1Data.CoinvestigatorName || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    {" "}
                    6.Designation<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="CoinvestigatorDesignation"
                    value={form1Data.CoinvestigatorDesignation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>

              <div className="flex-row flex w-[100%]">
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    7.Affiliation<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="CoinvestigatorAffiliation"
                    value={form1Data.CoinvestigatorAffiliation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    8.Address<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="CoinvestigatorAddress"
                    value={form1Data.CoinvestigatorAddress || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>
                    {" "}
                    9.Phone Number<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="CoinvestigatorPhno"
                    value={form1Data.CoinvestigatorPhno || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
                <label className="flex flex-col p-2 w-[50%] font-bold">
                  <h4>
                    {" "}
                    10.Email-id<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="CoinvestigatorEmail"
                    value={form1Data.CoinvestigatorEmail || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "

                    required
                  />
                </label>
              </div>

              <br />
              <br />
              <h2 className="font-bold">
                Details of Contact person-Public Query{" "}
                <span className="text-red-600">
                  (If Same as above then skip)
                </span>
              </h2>
              <br />
              <br />
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>11.Name:</h4>
                  <input
                    type="text"
                    name="Public_Query_name"
                    value={form1Data.Public_Query_name || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>12.Designation:</h4>
                  <input
                    type="text"
                    name="Public_Query_designation"
                    value={form1Data.Public_Query_designation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>
              </div>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>13.Affiliation:</h4>
                  <input
                    type="text"
                    name="Public_Query_affiliation"
                    value={form1Data.Public_Query_affiliation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>

                <label
                  className="flex flex-col  p-2  w-[50%] font-bold"
                  id="part3"
                >
                  14.Email Id:
                  <input
                    type="text"
                    name="email_id"
                    value={form1Data.email_id || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  15.Address:
                  <input
                    type="text"
                    name="Prim_Sponsorship_address"
                    value={form1Data.Prim_Sponsorship_address || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  15.Phone No:
                  <input
                    type="text"
                    name="Prim_Sponsorship_Phno"
                    value={form1Data.Prim_Sponsorship_Phno || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <br />
              <br />
              <h2 className="font-bold">Details of Guide </h2>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Name:</h4>
                  <input
                    type="text"
                    name="Guide_name"
                    value={form1Data.Guide_name || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>

                <label
                  className="flex flex-col  p-2  w-[50%] font-bold"
                  id="part3"
                >
                  Designation:
                  <input
                    type="text"
                    name="Guide_designation"
                    value={form1Data.Guide_designation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Affiliation:</h4>
                  <input
                    type="text"
                    name="Guide_affiliation"
                    value={form1Data.Guide_affiliation || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>

                <label
                  className="flex flex-col  p-2  w-[50%] font-bold"
                  id="part3"
                >
                  Email Id:
                  <input
                    type="text"
                    name="Guide_email"
                    value={form1Data.Guide_email || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Address:</h4>
                  <input
                    type="text"
                    name="Guide_address"
                    value={form1Data.Guide_address || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Phone No:</h4>
                  <input
                    type="text"
                    name="Guide_PhnNo"
                    value={form1Data.Guide_PhnNo || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 "
                  />
                </label>
              </div>

              <br />
              <br />
              <h2 className="font-bold">BASIC DATA OF MANUSCRIPT</h2>
              <br />
              <br />
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>16.Title in Catalogue :</h4>
                  <input
                    type="text"
                    name="catalog_title"
                    value={form1Data.catalog_title || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>17.Title of MSS:</h4>
                  <input
                    type="text"
                    name="MSS_title"
                    value={form1Data.MSS_title || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>19.Subject:</h4>
                  <input
                    type="text"
                    name="subject"
                    value={form1Data.subject || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>
                    20.Author<span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="author"
                    value={form1Data.author || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"

                    required
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>
                    21.Manuscripts Hypothecated to:
                    <span className="text-red-600">*</span>:
                  </h4>
                  <input
                    type="text"
                    name="MSS_owner"
                    value={form1Data.MSS_owner || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"

                    required
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>22.Scribe:</h4>
                  <input
                    type="text"
                    name="scribe"
                    value={form1Data.scribe || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Source of MSS:</h4>
                  <input
                    type="text"
                    name="MSS_source"
                    value={form1Data.MSS_source || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>MRC Name</h4>
                  <input
                    type="text"
                    name="MRC_Name"
                    value={form1Data.MRC_Name || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>

              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4> Accession Number</h4>
                  <input
                    type="text"
                    name=" Accession_Number"
                    value={form1Data.Accession_Number || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>MRC Name</h4>
                  <input
                    type="text"
                    name="MRC_Name"
                    value={form1Data.MRC_Name || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Manuscript Number</h4>
                  <input
                    type="text"
                    name=" Accession_Number"
                    value={form1Data.Manuscript_Number || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  <h4>Institute/ Repository Name</h4>
                  <input
                    type="text"
                    name="InstituteRepository_Name"
                    value={form1Data.InstituteRepository_Name || ""}
                    onChange={handleForm1InputChange}
                    required
                    placeholder="NA if not aplicable"
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>

              <br />
              <br />
              <h2 className="font-bold">
                23.Technical Section - Manuscript Details
              </h2>
              <br />
              <br />
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  24.Research topic:
                  <input
                    type="text"
                    name="Manu_Topic"
                    value={form1Data.Manu_Topic || ""}
                    onChange={handleForm1InputChange}
                    required
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  25.Subject:
                  <input
                    type="text"
                    name="Manu_Subject"
                    value={form1Data.Manu_Subject || ""}
                    onChange={handleForm1InputChange}
                    required
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  26.Size of manuscript in centimetres Length/Width (E.g.:
                  24x14) :
                  <input
                    type="text"
                    name="Manu_size"
                    value={form1Data.Manu_size || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>

                <label className="flex flex-col p-2  w-[50%] font-bold">
                  27.Binding Details:
                  <input
                    type="text"
                    name="Manu_binding"
                    value={form1Data.Manu_binding || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  28.Date of Commencement:
                  <input
                    type="date"
                    name="date_of_collection"
                    value={form1Data.date_of_collection || ""}
                    onChange={handleForm1InputChange}
                    required
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2  w-[50%] font-bold">
                  29.Estimated Duration-{" "}
                  <span className="text-red-700">
                    Note: Expected duration of at least two years from
                    commencement of the study/ as per university rules and
                    regulations{" "}
                  </span>{" "}
                  (Eg :3 Year, 2 Months):
                  <div className="flex flex-wrap gap-3">
                    <div className="flex  gap-1">
                      <label htmlFor="duration_year"> Year: </label>
                      <input
                        type="number"
                        name="duration_year"
                        value={form1Data.duration_year || ""}
                        onChange={handleForm1InputChange}
                        className="w-1/2"
                        // className="m-4 bg-blue-400"
                      />
                    </div>
                    <div className="flex  gap-1">
                      <label htmlFor="duration_months"> Months: </label>
                      <input
                        type="number"
                        name="duration_months"
                        value={form1Data.duration_number || ""}
                        onChange={handleForm1InputChange}
                        className="w-1/2"
                        // className="m-4 bg-blue-400"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <br />
              <br />
              <center>
                <div className="flex flex-col md:flex-row w-[100%] ">
                  <div>
                    <h2 className="text-lg font-bold">
                      30. Status<span className="text-red-600">*</span>:
                    </h2>
                  </div>
                  <div>
                    {" "}
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="Complete"
                        checked={form1Data.status === "Complete"}
                        onChange={handleForm1InputChange}
                        required
                        className="ml-2"
                      />
                      <span className="mb-2 ml-4">Complete</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label className="flex items-center ">
                      <input
                        type="radio"
                        name="status"
                        value="incomplete"
                        checked={form1Data.status === "incomplete"}
                        onChange={handleForm1InputChange}
                        required
                        className="ml-2 "
                      />
                      <span className="mb-2 ml-4">Incomplete</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    {/* Add the new radio button with a text option */}
                    {/* Add the text input for the custom option */}
                    {form1Data.status === "custom" && (
                      <label className="flex items-center">
                        <span className="mb-2 ml-2">Please specify:</span>
                        <input
                          type="text"
                          name="custom_status"
                          value={form1Data.custom_status || ""}
                          onChange={handleForm1InputChange}
                          required
                        />
                      </label>
                    )}
                  </div>
                </div>
              </center>
              <br />
              <br />

              <div className="flex flex-row w-[100%]" id="part4">
                <div className="w-[50%] mr-3">
                  <h2 className="font-bold">31.Script</h2>
                  <select
                    name="Script"
                    value={form1Data.Script}
                    onChange={handleForm1InputChange}
                    className="p-2 w-[100%]"
                  >
                    <option value="Ahom Akhar">Ahom Akhar</option>
                    <option value="Jawi Akhar">Jawi Akhar</option>
                    <option value="Ahom">Ahom</option>
                    <option value="akhar Jawi">akhar Jawi</option>
                    <option value="Akhar Laon">Akhar Laon</option>
                    <option value="Akhar Rik">Akhar Rik</option>
                    <option value="Akhar Thrah">Akhar Thrah</option>
                    <option value="Akhar Tuer">Akhar Tuer</option>
                    <option value="Akhar Yok">Akhar Yok</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Archaic Meite">Archaic Meite</option>
                    <option value="Asamese">Asamese</option>
                    <option value="Batak">Batak</option>
                    <option value="Baudhi">Baudhi</option>
                    <option value="Bengali">Bengali</option>
                    <option value="BhattakSari">BhattakSari</option>
                    <option value="Bhujmur">Bhujmur</option>
                    <option value="Brahmi">Brahmi</option>
                    <option value="Chandavani">Chandavani</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Citralipi">Citralipi</option>
                    <option value="Devanagari">Devanagari</option>
                    <option value="Dhamma Khuen">Dhamma Khuen</option>
                    <option value="Dhamma Lanna">Dhamma Lanna</option>
                    <option value="Gaudi">Gaudi</option>
                    <option value="Gilgit">Gilgit</option>
                    <option value="Golmol">Golmol</option>
                    <option value="Grantha">Grantha</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Gupta">Gupta</option>
                    <option value="Gurumukhi">Gurumukhi</option>
                    <option value="Halavi">Halavi</option>
                    <option value="Hinmol">Hinmol</option>
                    <option value="Indus">Indus</option>
                    <option value="Kadamba">Kadamba</option>
                    <option value="Kaithi">Kaithi</option>
                    <option value="Kalinga">Kalinga</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Kashmiri">Kashmiri</option>
                    <option value="Kharosthi">Kharosthi</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Khojki">Khojki</option>
                    <option value="Kirata">Kirata</option>
                    <option value="Kufic">Kufic</option>
                    <option value="Kunmol">Kunmol</option>
                    <option value="Kutalipi">Kutalipi</option>
                    <option value="Kwenmol">Kwenmol</option>
                    <option value="Landa">Landa</option>
                    <option value="Lepcha">Lepcha</option>
                    <option value="Lichavi">Lichavi</option>
                    <option value="Limbu">Limbu</option>
                    <option value="Litumol">Litumol</option>
                    <option value="Mahajani">Mahajani</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Meitei Mayek">Meitei Mayek</option>
                    <option value="Modi">Modi</option>
                    <option value="Nandinagari">Nandinagari</option>
                    <option value="Naskh">Naskh</option>
                    <option value="Nastaliq">Nastaliq</option>
                    <option value="Nepal Script(Prachalit)">
                      Nepal Script(Prachalit)
                    </option>
                    <option value="Newari">Newari</option>
                    <option value="Old Devnagari">Old Devnagari</option>
                    <option value="Old Kannada">Old Kannada</option>
                    <option value="Oriya">Oriya</option>
                    <option value="Pachumol">Pachumol</option>
                    <option value="Pahlavi">Pahlavi</option>
                    <option value="Pandavani">Pandavani</option>
                    <option value="Pashto">Pashto</option>
                    <option value="Pavachi">Pavachi</option>
                    <option value="Persian">Persian</option>
                    <option value="Phags-pa">Phags-pa</option>
                    <option value="Ranjana (Lantsa)">Ranjana (Lantsa)</option>
                    <option value="Redjung/Kaganga">Redjung/Kaganga</option>
                    <option value="Rekhta">Rekhta</option>
                    <option value="Sanchi">Sanchi</option>
                    <option value="Sharada">Sharada</option>
                    <option value="Shikasta">Shikasta</option>
                    <option value="Siddham">Siddham</option>
                    <option value="Siloti">Siloti</option>
                    <option value="Simhala">Simhala</option>
                    <option value="Sorang Sopeng">Sorang Sopeng</option>
                    <option value="Soyombo">Soyombo</option>
                    <option value="Takri">Takri</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Tiglari">Tiglari</option>
                    <option value="Tirhuta/Mithilakshar">
                      Tirhuta/Mithilakshar
                    </option>
                    <option value="Varang Kshite">Varang Kshite</option>
                    <option value="Vartu">Vartu</option>
                    <option value="Vattaluttu">Vattaluttu</option>
                    <option value="Others">Others</option>
                  </select>
                  {selectedScript === "Others" && (
                    <label className="flex items-center p-2">
                      <span className="ml-2">Please specify:</span>
                      <input
                        type="text"
                        name="custom_script"
                        value={customScript}
                        onChange={handleForm1InputChange}
                        required
                      />
                    </label>
                  )}
                </div>
                <div className="w-[50%]">
                  <h2 className="font-bold">32.Language</h2>
                  <select
                    name="Language"
                    value={form1Data.Language}
                    onChange={handleForm1InputChange}
                    className="p-2 w-[100%] "
                  >
                    <option value="Abhiri">Abhiri</option>
                    <option value="Agaria">Agaria</option>
                    <option value="Ahirani">Ahirani</option>
                    <option value="Aimol">Aimol</option>
                    <option value="Aiton">Aiton</option>
                    <option value="Anal">Anal</option>
                    <option value="Andamanese">Andamanese</option>
                    <option value="Angani">Angani</option>
                    <option value="Angika">Angika</option>
                    <option value="Apabhraṁśa">Apabhraṁśa</option>
                    <option value="Apatani">Apatani</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Archaic">Archaic</option>
                    <option value="Ardhamagadhi">Ardhamagadhi</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Asamese">Asamese</option>
                    <option value="Ashing">Ashing</option>
                    <option value="Asuri">Asuri</option>
                    <option value="Avadhi">Avadhi</option>
                    <option value="Avantija">Avantija</option>
                    <option value="Badaga">Badaga</option>
                    <option value="Bagheli">Bagheli</option>
                    <option value="Baghelkhandi">Baghelkhandi</option>
                    <option value="Bagri">Bagri</option>
                    <option value="Bahiri">Bahiri</option>
                    <option value="Baigani">Baigani</option>
                    <option value="Bajania">Bajania</option>
                    <option value="Balti">Balti</option>
                    <option value="Bangni">Bangni</option>
                    <option value="Bangru">Bangru</option>
                    <option value="Bantu">Bantu</option>
                    <option value="Barari">Barari</option>
                    <option value="Basturia">Basturia</option>
                    <option value="Bauria">Bauria</option>
                    <option value="Bawm">Bawm</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Bhanja-bhumia">Bhanja-bhumia</option>
                    <option value="Bharmauria">Bharmauria</option>
                    <option value="Bhili">Bhili</option>
                    <option value="Bhojapuri">Bhojapuri</option>
                    <option value="Bhotia">Bhotia</option>
                    <option value="Bhuiya">Bhuiya</option>
                    <option value="Biate">Biate</option>
                    <option value="Bichauli">Bichauli</option>
                    <option value="Bihari">Bihari</option>
                    <option value="Bilaspuri">Bilaspuri</option>
                    <option value="Birhor">Birhor</option>
                    <option value="Birjia">Birjia</option>
                    <option value="Bishnupuria">Bishnupuria</option>
                    <option value="Bodo">Bodo</option>
                    <option value="Bokar">Bokar</option>
                    <option value="Bondo">Bondo</option>
                    <option value="Bori">Bori</option>
                    <option value="Brahui">Brahui</option>
                    <option value="Brajabhasha">Brajabhasha</option>
                    <option value="Bugun">Bugun</option>
                    <option value="Bundeli">Bundeli</option>
                    <option value="Burmese">Burmese</option>
                    <option value="Bushari">Bushari</option>
                    <option value="Candali">Candali</option>
                    <option value="Chakhesang">Chakhesang</option>
                    <option value="Chakma">Chakma</option>
                    <option value="Cham">Cham</option>
                    <option value="Chambali">Chambali</option>
                    <option value="Chameali">Chameali</option>
                    <option value="Chang">Chang</option>
                    <option value="Changpa">Changpa</option>
                    <option value="Chattisgarhi">Chattisgarhi</option>
                    <option value="Chikari">Chikari</option>
                    <option value="Chinali">Chinali</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Chiru">Chiru</option>
                    <option value="Chitapavami">Chitapavami</option>
                    <option value="Chitrali">Chitrali</option>
                    <option value="Chote">Chote</option>
                    <option value="Churasi">Churasi</option>
                    <option value="Citpawani">Citpawani</option>
                    <option value="Daldi">Daldi</option>
                    <option value="Dalu">Dalu</option>
                    <option value="Darad">Darad</option>
                    <option value="Deori">Deori</option>
                    <option value="Desi">Desi</option>
                    <option value="Dhanki">Dhanki</option>
                    <option value="Dhimal">Dhimal</option>
                    <option value="Dhodia">Dhodia</option>
                    <option value="Dhundhari">Dhundhari</option>
                    <option value="Didayi">Didayi</option>
                    <option value="Dilahi">Dilahi</option>
                    <option value="Dimasa">Dimasa</option>
                    <option value="Dingal">Dingal</option>
                    <option value="Dogri">Dogri</option>
                    <option value="Dommari">Dommari</option>
                    <option value="Droskhat">Droskhat</option>
                    <option value="Duhlian-Twang">Duhlian-Twang</option>
                    <option value="Gadaba">Gadaba</option>
                    <option value="Gadiali">Gadiali</option>
                    <option value="Gallong">Gallong</option>
                    <option value="Gameti">Gameti</option>
                    <option value="Gamit">Gamit</option>
                    <option value="Gangte">Gangte</option>
                    <option value="Garasia">Garasia</option>
                    <option value="Garhwali">Garhwali</option>
                    <option value="Garo">Garo</option>
                    <option value="Giarahi">Giarahi</option>
                    <option value="Gondi">Gondi</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Gujjari">Gujjari</option>
                    <option value="Gurkhali">Gurkhali</option>
                    <option value="Gurung">Gurung</option>
                    <option value="Gutob">Gutob</option>
                    <option value="Hajong">Hajong</option>
                    <option value="Halam">Halam</option>
                    <option value="Halbi">Halbi</option>
                    <option value="Harauti">Harauti</option>
                    <option value="Harayanavi">Harayanavi</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Himachali">Himachali</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hinduri">Hinduri</option>
                    <option value="Hindusthani">Hindusthani</option>
                    <option value="Hmar">Hmar</option>
                    <option value="Ho">Ho</option>
                    <option value="Hrusso">Hrusso</option>
                    <option value="Hualngo">Hualngo</option>
                    <option value="Irula">Irula</option>
                    <option value="Jabalpuri">Jabalpuri</option>
                    <option value="Jangali">Jangali</option>
                    <option value="Jatki">Jatki</option>
                    <option value="Jaunsari">Jaunsari</option>
                    <option value="Juang">Juang</option>
                    <option value="Kabui">Kabui</option>
                    <option value="Kacchi">Kacchi</option>
                    <option value="Kachanga">Kachanga</option>
                    <option value="Kachari">Kachari</option>
                    <option value="Kadar">Kadar</option>
                    <option value="Kagati">Kagati</option>
                    <option value="Kakbarak">Kakbarak</option>
                    <option value="Kanashi">Kanashi</option>
                    <option value="Kanauji">Kanauji</option>
                    <option value="Kangri">Kangri</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Karbi">Karbi</option>
                    <option value="Karen">Karen</option>
                    <option value="Karko">Karko</option>
                    <option value="Kashmiri">Kashmiri</option>
                    <option value="Kathiawari">Kathiawari</option>
                    <option value="Khadiboli">Khadiboli</option>
                    <option value="Khaka">Khaka</option>
                    <option value="Khamba">Khamba</option>
                    <option value="Khampa">Khampa</option>
                    <option value="Khampti">Khampti</option>
                    <option value="Khampt-shan">Khampt-shan</option>
                    <option value="Khandesi">Khandesi</option>
                    <option value="Khanvar">Khanvar</option>
                    <option value="Kharar">Kharar</option>
                    <option value="Kharia">Kharia</option>
                    <option value="Kharoali">Kharoali</option>
                    <option value="Khasi">Khasi</option>
                    <option value="Khaskura">Khaskura</option>
                    <option value="Khatri">Khatri</option>
                    <option value="Kherwari">Kherwari</option>
                    <option value="Khiangan">Khiangan</option>
                    <option value="Khorusthi">Khorusthi</option>
                    <option value="Khotta">Khotta</option>
                    <option value="Kinnauri">Kinnauri</option>
                    <option value="Kiradi">Kiradi</option>
                    <option value="Kisan">Kisan</option>
                    <option value="Koch">Koch</option>
                    <option value="Kodagu">Kodagu</option>
                    <option value="Koi">Koi</option>
                    <option value="Koireng">Koireng</option>
                    <option value="Kokni">Kokni</option>
                    <option value="Kolami">Kolami</option>
                    <option value="Kolha">Kolha</option>
                    <option value="Kom">Kom</option>
                    <option value="Komkar">Komkar</option>
                    <option value="Konda">Konda</option>
                    <option value="Konicha">Konicha</option>
                    <option value="Konkani">Konkani</option>
                    <option value="Konyak">Konyak</option>
                    <option value="Koracha">Koracha</option>
                    <option value="Koraga">Koraga</option>
                    <option value="Korava">Korava</option>
                    <option value="Korku">Korku</option>
                    <option value="Korwa">Korwa</option>
                    <option value="Kota">Kota</option>
                    <option value="Kotwalia">Kotwalia</option>
                    <option value="Kudmali">Kudmali</option>
                    <option value="Kui">Kui</option>
                    <option value="Kuki">Kuki</option>
                    <option value="Kului">Kului</option>
                    <option value="Kumayuni">Kumayuni</option>
                    <option value="Kunbi">Kunbi</option>
                    <option value="Kurukh">Kurukh</option>
                    <option value="Kuvi">Kuvi</option>
                    <option value="Kyanthali">Kyanthali</option>
                    <option value="Ladakhi">Ladakhi</option>
                    <option value="Ladi">Ladi</option>
                    <option value="Lahanda">Lahanda</option>
                    <option value="Lahauli">Lahauli</option>
                    <option value="Lailawlh">Lailawlh</option>
                    <option value="Lakher">Lakher</option>
                    <option value="Lalung">Lalung</option>
                    <option value="Lambani">Lambani</option>
                    <option value="Lamgang">Lamgang</option>
                    <option value="Lanna">Lanna</option>
                    <option value="Laotian">Laotian</option>
                    <option value="Laria">Laria</option>
                    <option value="Lati">Lati</option>
                    <option value="Lepcha">Lepcha</option>
                    <option value="Limbu">Limbu</option>
                    <option value="Lisu">Lisu</option>
                    <option value="Lodha">Lodha</option>
                    <option value="Lotha">Lotha</option>
                    <option value="Lushai">Lushai</option>
                    <option value="Mag">Mag</option>
                    <option value="Magadhi">Magadhi</option>
                    <option value="Magahi">Magahi</option>
                    <option value="Magarkura">Magarkura</option>
                    <option value="Mahal">Mahal</option>
                    <option value="Maithili">Maithili</option>
                    <option value="Majhi">Majhi</option>
                    <option value="Makrani">Makrani</option>
                    <option value="Malankudi">Malankudi</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Malhar">Malhar</option>
                    <option value="Malto">Malto</option>
                    <option value="Malvi">Malvi</option>
                    <option value="Manchat">Manchat</option>
                    <option value="Mandiali">Mandiali</option>
                    <option value="Mangari">Mangari</option>
                    <option value="Manipuri">Manipuri</option>
                    <option value="Mao">Mao</option>
                    <option value="Maram">Maram</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Maria">Maria</option>
                    <option value="Maring">Maring</option>
                    <option value="Marugurjar">Marugurjar</option>
                    <option value="Marvadi">Marvadi</option>
                    <option value="Mavchi">Mavchi</option>
                    <option value="Meitei">Meitei</option>
                    <option value="Memba">Memba</option>
                    <option value="Mevari">Mevari</option>
                    <option value="Mewati">Mewati</option>
                    <option value="Milang">Milang</option>
                    <option value="Minyong">Minyong</option>
                    <option value="Miri">Miri</option>
                    <option value="Mishing">Mishing</option>
                    <option value="Mishmi">Mishmi</option>
                    <option value="Mizo">Mizo</option>
                    <option value="Monpa">Monpa</option>
                    <option value="Monsang">Monsang</option>
                    <option value="Moyon">Moyon</option>
                    <option value="Muduga">Muduga</option>
                    <option value="Multani">Multani</option>
                    <option value="Mundari">Mundari</option>
                    <option value="Naga">Naga</option>
                    <option value="Nagapuri">Nagapuri</option>
                    <option value="Nagari">Nagari</option>
                    <option value="Naikadi">Naikadi</option>
                    <option value="Naiki">Naiki</option>
                    <option value="Nati">Nati</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Nicobarese">Nicobarese</option>
                    <option value="Nimari">Nimari</option>
                    <option value="Nishi">Nishi</option>
                    <option value="Nocte">Nocte</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Odki">Odki</option>
                    <option value="Old Vietnamese (Han Nom)">
                      Old Vietnamese (Han Nom)
                    </option>
                    <option value="Onge">Onge</option>
                    <option value="Oriya">Oriya</option>
                    <option value="Padam">Padam</option>
                    <option value="Pahari">Pahari</option>
                    <option value="Pahlavi">Pahlavi</option>
                    <option value="Paisachi">Paisachi</option>
                    <option value="Paite">Paite</option>
                    <option value="Pali">Pali</option>
                    <option value="Palilibo">Palilibo</option>
                    <option value="Pamiri">Pamiri</option>
                    <option value="Panchpargania">Panchpargania</option>
                    <option value="Pang">Pang</option>
                    <option value="Pangi">Pangi</option>
                    <option value="Pangvali">Pangvali</option>
                    <option value="Parimu">Parimu</option>
                    <option value="Parji">Parji</option>
                    <option value="Parvatiya">Parvatiya</option>
                    <option value="Paschima">Paschima</option>
                    <option value="Pasi">Pasi</option>
                    <option value="Pasto">Pasto</option>
                    <option value="Pavri">Pavri</option>
                    <option value="Pengo">Pengo</option>
                    <option value="Persian">Persian</option>
                    <option value="Phom">Phom</option>
                    <option value="Pochuri">Pochuri</option>
                    <option value="Pracya">Pracya</option>
                    <option value="Prakrit">Prakrit</option>
                    <option value="Punchi">Punchi</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Rai">Rai</option>
                    <option value="Rajasthani">Rajasthani</option>
                    <option value="Rajmahali">Rajmahali</option>
                    <option value="Ralte">Ralte</option>
                    <option value="Ramo">Ramo</option>
                    <option value="Rathi">Rathi</option>
                    <option value="Rengma">Rengma</option>
                    <option value="Riang">Riang</option>
                    <option value="Sabari">Sabari</option>
                    <option value="Sacari">Sacari</option>
                    <option value="Sadra">Sadra</option>
                    <option value="Sadri">Sadri</option>
                    <option value="Sajalong">Sajalong</option>
                    <option value="Sambalpuri">Sambalpuri</option>
                    <option value="Sangtam">Sangtam</option>
                    <option value="Sansi">Sansi</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Santhali">Santhali</option>
                    <option value="Saraji">Saraji</option>
                    <option value="Sarhodi">Sarhodi</option>
                    <option value="Sauraseni">Sauraseni</option>
                    <option value="Saurashtri">Saurashtri</option>
                    <option value="Sema">Sema</option>
                    <option value="Sentinelese">Sentinelese</option>
                    <option value="Shekhavati">Shekhavati</option>
                    <option value="Sherdukpen">Sherdukpen</option>
                    <option value="Sherpa">Sherpa</option>
                    <option value="Shimong">Shimong</option>
                    <option value="Shina">Shina</option>
                    <option value="Shompen">Shompen</option>
                    <option value="Sikligar">Sikligar</option>
                    <option value="Simhalese">Simhalese</option>
                    <option value="Sindhi">Sindhi</option>
                    <option value="Singpo">Singpo</option>
                    <option value="Siraiki">Siraiki</option>
                    <option value="Sirmauri">Sirmauri</option>
                    <option value="Soliga">Soliga</option>
                    <option value="Sulung">Sulung</option>
                    <option value="Surajpuri">Surajpuri</option>
                    <option value="Tagin">Tagin</option>
                    <option value="Tai">Tai</option>
                    <option value="Tai Khuen">Tai Khuen</option>
                    <option value="Tai Yuan">Tai Yuan</option>
                    <option value="Tamang">Tamang</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Tangkhul">Tangkhul</option>
                    <option value="Tangsa">Tangsa</option>
                    <option value="Tataotrong">Tataotrong</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Thado">Thado</option>
                    <option value="Thar">Thar</option>
                    <option value="Thareli">Thareli</option>
                    <option value="Tharu">Tharu</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Toda">Toda</option>
                    <option value="Toto">Toto</option>
                    <option value="Tulu">Tulu</option>
                    <option value="Tumbuka">Tumbuka</option>
                    <option value="Ucci">Ucci</option>
                    <option value="Udraja">Udraja</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Vagri">Vagri</option>
                    <option value="Vaiphei">Vaiphei</option>
                    <option value="Vancho">Vancho</option>
                    <option value="Vanecari">Vanecari</option>
                    <option value="Varli">Varli</option>
                    <option value="Yereva">Yereva</option>
                    <option value="Yerukula">Yerukula</option>
                    <option value="Yimchungre">Yimchungre</option>
                    <option value="Zakring(Meyer)">Zakring(Meyer)</option>
                    <option value="Zeliang">Zeliang</option>
                    <option value="Zou">Zou</option>
                    <option value="Other_Language">Other Language</option>
                  </select>
                  {selectedlanguage === "Other_Language" && (
                    <label className="flex items-center p-2">
                      <span className="ml-2">Please specify:</span>
                      <input
                        type="text"
                        name="custom_language"
                        value={customlanguage}
                        onChange={handleForm1InputChange}
                        required
                      />
                    </label>
                  )}
                </div>
              </div>
              <br />
              <div className="w-[50%]">
                <h2 className="font-bold">33.Material</h2>
                <br />
                <select
                  name="Material"
                  value={form1Data.Material}
                  onChange={handleForm1InputChange}
                  className="p-2  w-[100%] "
                >
                  <option value="Animal Products">Animal Products</option>
                  <option value="Bamboo leaf/बांस का पत्ता">
                    Bamboo leaf/बांस का पत्ता
                  </option>
                  <option value="Banana leaf/कदली पत्र">
                    Banana leaf/कदली पत्र
                  </option>
                  <option value="Birch bark/भोज पत्र">
                    Birch bark/भोज पत्र
                  </option>
                  <option value="Clay Tablet /मृत्पट्टिका">
                    Clay Tablet /मृत्पट्टिका
                  </option>
                  <option value="Copper plate/ताम्र पत्र">
                    Copper plate/ताम्र पत्र
                  </option>
                  <option value="Deer Horn/मृग (हिरण) सींग">
                    Deer Horn/मृग (हिरण) सींग
                  </option>
                  <option value="Deer Skin/मृग (हिरण) चर्म">
                    Deer Skin/मृग (हिरण) चर्म
                  </option>
                  <option value="Earthenware">Earthenware</option>
                  <option value="Gold plate/स्वर्ण पत्र">
                    Gold plate/स्वर्ण पत्र
                  </option>
                  <option value="Iron plate /लौह">Iron plate /लौह</option>
                  <option value="Ivory/हाथी दाँत का बना हुआ">
                    Ivory/हाथी दाँत का बना हुआ
                  </option>
                  <option value="Leather/चर्म">Leather/चर्म</option>
                  <option value="Metal Sheets">Metal Sheets</option>
                  <option value="Palm leaf/ताड़ पत्र">
                    Palm leaf/ताड़ पत्र
                  </option>
                  <option value="Paper/कागज">Paper/कागज</option>
                  <option value="Parchment/चर्म पत्र">
                    Parchment/चर्म पत्र
                  </option>
                  <option value="Plant Products">Plant Products</option>
                  <option value="Sanchi (Tula) pat/सांचीपट">
                    Sanchi (Tula) pat/सांचीपट
                  </option>
                  <option value="Silk/ रेशमी वस्त्र">Silk/ रेशमी वस्त्र</option>
                  <option value="Silver plate/रजत पत्र">
                    Silver plate/रजत पत्र
                  </option>
                  <option value="Textile/ cotton/सूती वस्त्र">
                    Textile/ cotton/सूती वस्त्र
                  </option>
                  <option value="Others">Others</option>
                </select>
                {selectedScript === "Others" && (
                  <label className="flex items-center p-2">
                    <span className="ml-2">Please specify:</span>
                    <input
                      type="text"
                      name="custom_material"
                      value={customScript}
                      onChange={handleForm1InputChange}
                      required
                    />
                  </label>
                )}
              </div>

              <br />
              <br />
              <h2 className="font-bold">34. Condition of MSS</h2>
              <div className="flex flex-col md:flex-row flex-wrap">
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Acidic"
                      checked={form1Data.MSS_condition === "Acidic"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Acidic</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Bad"
                      checked={form1Data.MSS_condition === "Bad"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Bad</span>
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Brittle"
                      checked={form1Data.MSS_condition === "Brittle"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Brittle</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Broken"
                      checked={form1Data.MSS_condition === "Broken"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Broken</span>
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Fungal Infected"
                      checked={form1Data.MSS_condition === "Fungal Infected"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Fungal Infected</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Good"
                      checked={form1Data.MSS_condition === "Good"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Good</span>
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Ink Loosed"
                      checked={form1Data.MSS_condition === "Ink Loosed"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Ink Loosed</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Stained"
                      checked={form1Data.MSS_condition === "Stained"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Stained</span>
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Stuck"
                      checked={form1Data.MSS_condition === "Stuck"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Stuck</span>
                  </label>
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="worm_eaten"
                      checked={form1Data.MSS_condition === "worm_eaten"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Worm Eaten</span>
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <label className="flex items-center p-2">
                    <input
                      type="radio"
                      name="MSS_condition"
                      value="Binding Loss"
                      checked={form1Data.MSS_condition === "Binding Loss"}
                      onChange={handleForm1InputChange}
                    />
                    <span className="ml-2">Binding Loss</span>
                  </label>
                </div>
              </div>

              <br />
              <br />
              <h2 className="font-bold">
                Historical Data/Probable Time period of Manuscript
              </h2>
              <div className="w-[100%] flex flex-row">
                <label className="flex flex-col p-2 font-bold w-[50%]">
                  Probable Date of original Manuscript:
                  <input
                    type="text"
                    name="MSS_Year"
                    value={form1Data.MSS_Year || ""}
                    onChange={handleForm1InputChange}
                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2 font-bold w-[50%] ">
                  Probable Date of current Manuscript :
                  <input
                    type="text"
                    name="data_data"
                    value={form1Data.data_data || ""}
                    onChange={handleForm1InputChange}

                    // className="m-4 bg-blue-400"
                  />
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <label className="flex flex-col p-2 font-bold w-[50%]">
                  Place of Writing :
                  <input
                    type="text"
                    name="place_of_writing"
                    value={form1Data.place_of_writing || ""}
                    onChange={handleForm1InputChange}

                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2 font-bold w-[50%] ">
                  State & Union Territory :
                  <select
                    name="StateOrUnionTerritory"
                    value={form1Data.StateOrUnionTerritory}
                    onChange={handleForm1InputChange}
                    className="p-2 w-[100%]"
                  >
                    <option value="Select State ">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[50%]">
                  <h2 className="font-bold">35.Manuscript Date Samvat</h2>
                  <select
                    name="Date_Samvat"
                    value={form1Data.Date_Samvat}
                    onChange={handleForm1InputChange}
                    className="p-2 w-[100%]"
                  >
                    <option value="Bangali (बंगाली) san">
                      Bangali (बंगाली) san
                    </option>
                    <option value="Caitradi Vikram (विक्रम) samvat">
                      Caitradi Vikram (विक्रम) samvat
                    </option>
                    <option value="Chalukya (चालुक्य) Vikram samvat">
                      Chalukya (चालुक्य) Vikram samvat
                    </option>
                    <option value="Dakshini Phasali (दक्षिणी फसली) san">
                      Dakshini Phasali (दक्षिणी फसली) san
                    </option>
                    <option value="Gangeya (गंगेय) samvat">
                      Gangeya (गंगेय) samvat
                    </option>
                    <option value="Gupta (गुप्त) samvat">
                      Gupta (गुप्त) samvat
                    </option>
                    <option value="Harsha (हर्ष) samvat">
                      Harsha (हर्ष) samvat
                    </option>
                    <option value="Hizari (हिजरी) san">
                      Hizari (हिजरी) san
                    </option>
                    <option value="Ilahi (इलाही) san">Ilahi (इलाही) san</option>
                    <option value="Kalichuri (कलिचुरी) samvat">
                      Kalichuri (कलिचुरी) samvat
                    </option>
                    <option value="Kaliyuga (कलियुग) samvat">
                      Kaliyuga (कलियुग) samvat
                    </option>
                    <option value="Kollam (कोल्लम) samvat">
                      Kollam (कोल्लम) samvat
                    </option>
                    <option value="Lakshmana Sena (लक्ष्मणसेन) samvat">
                      Lakshmana Sena (लक्ष्मणसेन) samvat
                    </option>
                    <option value="Magi (मागी) san">Magi (मागी) san</option>
                    <option value="Maurya (मौर्य) samvat">
                      Maurya (मौर्य) samvat
                    </option>
                    <option value="Newar (नेवार) samvat">
                      Newar (नेवार) samvat
                    </option>
                    <option value="Not Available">Not Available</option>
                    <option value="Rajyabhisheka (राज्याभिषेक) samvat">
                      Rajyabhisheka (राज्याभिषेक) samvat
                    </option>
                    <option value="Shahur (सहुर) san">Shahur (सहुर) san</option>
                    <option value="Shaka (शक) samvat">Shaka (शक) samvat</option>
                    <option value="Uttari Phasali (उत्तरी फसली) san">
                       Uttari Phasali (उत्तरी फसली) san
                    </option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
                <div className="w-[50%]">
                  <h2 className="font-bold">36.Manuscript Date</h2>

                  <select
                    name="Manu_date_christian"
                    value={form1Data.Manu_date_christian}
                    onChange={handleForm1InputChange}
                    className="p-2 w-[100%] ml-2"
                  >
                    <option value="10 (Tenth/10th/दसवीं/10वीं)">
                      10 (Tenth/10th/दसवीं/10वीं)
                    </option>
                    <option value="11 (Eleventh/11th/ग्यारहवीं/11वीं)">
                      11 (Eleventh/11th/ग्यारहवीं/11वीं)
                    </option>
                    <option value="12 (Twelvth/12th/बारहवीं/12वीं)">
                      12 (Twelvth/12th/बारहवीं/12वीं)
                    </option>
                    <option value="13 (Thirteenth/13th/तेरहवीं /13वीं)">
                      13 (Thirteenth/13th/तेरहवीं /13वीं)
                    </option>
                    <option value="14 (Fourteenth/14th/चौदहवीं/14वीं)">
                      14 (Fourteenth/14th/चौदहवीं/14वीं)
                    </option>
                    <option value="15 (Fifteenth /15th/पन्द्रहवीं/15वीं)">
                      15 (Fifteenth /15th/पन्द्रहवीं/15वीं)
                    </option>
                    <option value="16 (Sixteenth/16th/सोलहवीं/16वीं)">
                      16 (Sixteenth/16th/सोलहवीं/16वीं)
                    </option>
                    <option value="17 (Seventeenth/17th/सत्रहवीं/17वीं)">
                      17 (Seventeenth/17th/सत्रहवीं/17वीं)
                    </option>
                    <option value="18 (Eighteenth/18th/अठारहवीं/18वीं)">
                      18 (Eighteenth/18th/अठारहवीं/18वीं)
                    </option>
                    <option value="19 (Nineteenth/19th/उन्नीसवीं/19वीं)">
                      19 (Nineteenth/19th/उन्नीसवीं/19वीं)
                    </option>
                    <option value="1 (First/1st /पहली/1ली)">
                      1 (First/1st /पहली/1ली)
                    </option>
                    <option value="20 (Twentieth/20th/बीसवीं/20वीं)">
                      20 (Twentieth/20th/बीसवीं/20वीं)
                    </option>
                    <option value="2 (Second/2nd/ दूसरी/2री)">
                      2 (Second/2nd/ दूसरी/2री)
                    </option>
                    <option value="3 (Third/3rd/ तीसरी/3री)">
                      3 (Third/3rd/ तीसरी/3री)
                    </option>
                    <option value="4 (Fourth/4th /चौथी/4थी)">
                      4 (Fourth/4th /चौथी/4थी)
                    </option>
                    <option value="5 (Fifth /5th/ पाँचवीं/ 5वीं)">
                      5 (Fifth /5th/ पाँचवीं/ 5वीं)
                    </option>
                    <option value="6 (Sixth /6th/छठी/6ठी)">
                      6 (Sixth /6th/छठी/6ठी)
                    </option>
                    <option value="7 (Seventh/7th/सातवीं/7वीं)">
                      7 (Seventh/7th/सातवीं/7वीं)
                    </option>
                    <option value="8 (Eighth/8th/आठवीं/8वीं)">
                      8 (Eighth/8th/आठवीं/8वीं)
                    </option>
                    <option value="9 (Nineth/9th/नौवीं/9वीं)">
                      9 (Nineth/9th/नौवीं/9वीं)
                    </option>
                    <option value="Not available">Not available</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <br />
                <center></center>

                <br />
                <br />
                <h2 className="font-bold">38.Source of Manuscript</h2>
                <br />
                <center>
                  <select
                    name="manu_source"
                    value={form1Data.manu_source || ""}
                    onChange={handleForm1InputChange}
                    className="p-3 w-[50%]"
                  >
                    <option value="">Source of Manuscript</option>
                    <option value="Academy of Snskrit Research, Melkote">
                      Academy of Snskrit Research, Melkote
                    </option>
                    <option value="Akhila Bharatiya Sanskrit Parishad">
                      Akhila Bharatiya Sanskrit Parishad
                    </option>
                    <option value="Aklank Shodh Sansthan, Kota">
                      Aklank Shodh Sansthan, Kota
                    </option>
                    <option value="Allama Iqbal Library, University of Kashmir, Hazratbal, Srinagar, J&K">
                      Allama Iqbal Library, University of Kashmir, Hazratbal,
                      Srinagar, J&K
                    </option>
                    <option value="Amrita Vishwa Vidyapeetham University, Amritapuri, Kollam,Kerala">
                      Amrita Vishwa Vidyapeetham University, Amritapuri,
                      Kollam,Kerala
                    </option>
                    <option value="Anandashram Sanstha, Erandwane ,Pune, Maharashtra">
                      Anandashram Sanstha, Erandwane ,Pune, Maharashtra
                    </option>
                    <option value="A.P. Govt. Oriental Manuscripts Library and Research Institute,Hyderabad">
                      A.P. Govt. Oriental Manuscripts Library and Research
                      Institute,Hyderabad
                    </option>
                    <option value="Arunachal University,Itanagar">
                      Arunachal University,Itanagar
                    </option>
                    <option value="Asom Kalaguri Kistri Mandir Bodha Samaj Meragarh(MPC)">
                      Asom Kalaguri Kistri Mandir Bodha Samaj Meragarh(MPC)
                    </option>
                    <option value="Bhagwan Library, Survey">
                      Bhagwan Library, Survey
                    </option>
                    <option value="Bhai Vir Singh Sahitya Sadan, Gole Market, New Delhi">
                      Bhai Vir Singh Sahitya Sadan, Gole Market, New Delhi
                    </option>
                    <option value="Bhandarkar Oriental Research Institute, Pune">
                      Bhandarkar Oriental Research Institute, Pune
                    </option>
                    <option value="Bhogilal Leherchand Research Institute Of Indology,Delhi">
                      Bhogilal Leherchand Research Institute Of Indology,Delhi
                    </option>
                    <option value="Central Institute of Buddhist Studies, Leh">
                      Central Institute of Buddhist Studies, Leh
                    </option>
                    <option value="Central Institute Of Higher Tibetan Studies,Sarnath">
                      Central Institute Of Higher Tibetan Studies,Sarnath
                    </option>
                    <option value="Chaudhary Charan Singh University, Meerut, Uttar Pradesh">
                      Chaudhary Charan Singh University, Meerut, Uttar Pradesh
                    </option>
                    <option value="Chinmaya International Foundations Veliyanad, Ernakulam">
                      Chinmaya International Foundations Veliyanad, Ernakulam
                    </option>
                    <option value="Chinmaya International Foundations,Kerala (Survey)">
                      Chinmaya International Foundations,Kerala (Survey)
                    </option>
                    <option value="Click Institute, Tonk">
                      Click Institute, Tonk
                    </option>
                    <option value="CPR Institute of Indological Research(MPC), Alwarpet, Chennai">
                      CPR Institute of Indological Research(MPC), Alwarpet,
                      Chennai
                    </option>
                    <option value="Cultural Affairs &amp; Heritage Department, (Govt. of Sikkim)">
                      Cultural Affairs &amp; Heritage Department, (Govt. of
                      Sikkim)
                    </option>
                    <option value="Dakhinpat Asharami Satra">
                      Dakhinpat Asharami Satra
                    </option>
                    <option value="Department of Historical &amp; Antiquarian Studies">
                      Department of Historical &amp; Antiquarian Studies
                    </option>
                    <option value="Department of Tamil Literature,Chennai">
                      Department of Tamil Literature,Chennai
                    </option>
                    <option value="Department of Urdu, University of Mumbai">
                      Department of Urdu, University of Mumbai
                    </option>
                    <option value="Dept of Archives, J &amp; K State Govt., Srinagar">
                      Dept of Archives, J &amp; K State Govt., Srinagar
                    </option>
                    <option value="Dept. of Nyaya Philosophy, Rashtriya Sanskrit Vidyapeetha">
                      Dept. of Nyaya Philosophy, Rashtriya Sanskrit Vidyapeetha
                    </option>
                    <option value="Dept. of Persian, University of Kashmir">
                      Dept. of Persian, University of Kashmir
                    </option>
                    <option value="Dev Kumar Jain Oriental Research Institute, Arrah, Bihar">
                      Dev Kumar Jain Oriental Research Institute, Arrah, Bihar
                    </option>
                    <option value="Directorate of State Archaeology, Srinagar">
                      Directorate of State Archaeology, Srinagar
                    </option>
                    <option value="Dravidian University, Chittoor, AP">
                      Dravidian University, Chittoor, AP
                    </option>
                    <option value="Dr. Harisingh Gour University,Sagar">
                      Dr. Harisingh Gour University,Sagar
                    </option>
                    <option value="Dr. Syed Abdul Mohaimin Quadri Laoubali Institute for Management &amp; Conservation of Manuscripts">
                      Dr. Syed Abdul Mohaimin Quadri Laoubali Institute for
                      Management &amp; Conservation of Manuscripts
                    </option>
                    <option value="Forbes Gujarati Sabha, Juhu- MPC">
                      Forbes Gujarati Sabha, Juhu- MPC
                    </option>
                    <option value="French Institute of Pondicherry, Pondicherry">
                      French Institute of Pondicherry, Pondicherry
                    </option>
                    <option value="Govt. Oriental Manuscripts Library, Chennai">
                      Govt. Oriental Manuscripts Library, Chennai
                    </option>
                    <option value="Govt. Sanskrit College (MPC), Tripunithura">
                      Govt. Sanskrit College (MPC), Tripunithura
                    </option>
                    <option value="Gurucharan College,Silcher">
                      Gurucharan College,Silcher
                    </option>
                    <option value="Himachal Academy of Arts Culture and Languages">
                      Himachal Academy of Arts Culture and Languages
                    </option>
                    <option value="Himachal Academy of Arts,Culture And Languages,Shimla (Survey)">
                      Himachal Academy of Arts,Culture And Languages,Shimla
                      (Survey)
                    </option>
                    <option value="HMS Central Library, Jamia Hamdard (Hamdard University)">
                      HMS Central Library, Jamia Hamdard (Hamdard University)
                    </option>
                    <option value="IGNCA, Regional Centre, Varanasi">
                      IGNCA, Regional Centre, Varanasi
                    </option>
                    <option value="Indian Council for Cultural Relations, New Delhi">
                      Indian Council for Cultural Relations, New Delhi
                    </option>
                    <option value="Indira Gandhi National Centre for the Arts, New Delhi?">
                      Indira Gandhi National Centre for the Arts, New Delhi?
                    </option>
                    <option value="Institute For Oriental Studies(Shiva Shakti),Thane">
                      Institute For Oriental Studies(Shiva Shakti),Thane
                    </option>
                    <option value="Institute of Asian Studies, Sholinganallur, Chennai">
                      Institute of Asian Studies, Sholinganallur, Chennai
                    </option>
                    <option value="Institute of Rajasthan Studies (MPC)">
                      Institute of Rajasthan Studies (MPC)
                    </option>
                    <option value="Institute Of Tai Studies and Research, Moranhat">
                      Institute Of Tai Studies and Research, Moranhat
                    </option>
                    <option value="Intach, Lucknow(Survey)">
                      Intach, Lucknow(Survey)
                    </option>
                    <option value="Jain Data (Personal Collection)">
                      Jain Data (Personal Collection)
                    </option>
                    <option value="Jain Vishva Bharati Institute, Ladnun, Nagaur, Rajasthan">
                      Jain Vishva Bharati Institute, Ladnun, Nagaur, Rajasthan
                    </option>
                    <option value="Jammu And Kashmir Survey (Suresh Abroli)">
                      Jammu And Kashmir Survey (Suresh Abroli)
                    </option>
                    <option value="Jammu &amp; kashmir  Survey (Peerzada Ab. Bemyar)">
                      Jammu &amp; kashmir Survey (Peerzada Ab. Bemyar)
                    </option>
                    <option value="J.M.Seetharama">J.M.Seetharama</option>
                    <option value="Kameshwar Singh Darbhanga Sanskrit University, Darbhanga">
                      Kameshwar Singh Darbhanga Sanskrit University, Darbhanga
                    </option>
                    <option value="Kamrup Sanskrit Sanjivani Sabha, Nalbari, Assam">
                      Kamrup Sanskrit Sanjivani Sabha, Nalbari, Assam
                    </option>
                    <option value="Kannada University,Vidyaranya">
                      Kannada University,Vidyaranya
                    </option>
                    <option value="Kavikulaguru Kalidasa Sanskrit University,Ramtek">
                      Kavikulaguru Kalidasa Sanskrit University,Ramtek
                    </option>
                    <option value="Keladi Museum &amp;amp; Historical Research,Sagar Tq">
                      Keladi Museum &amp;amp; Historical Research,Sagar Tq
                    </option>
                    <option value="Khuda Baksh Oriental Public Library, Patna">
                      Khuda Baksh Oriental Public Library, Patna
                    </option>
                    <option value="K.K.Handique Govt. Sanskrit College, Guwahati,Assam">
                      K.K.Handique Govt. Sanskrit College, Guwahati,Assam
                    </option>
                    <option value="Krishnakanta Handiqui Library, Guwahati">
                      Krishnakanta Handiqui Library, Guwahati
                    </option>
                    <option value="Kundkund Jnanapitha, Indore, M.P">
                      Kundkund Jnanapitha, Indore, M.P
                    </option>
                    <option value="Kurukshetra University Library, Kurukshetra">
                      Kurukshetra University Library, Kurukshetra
                    </option>
                    <option value="Lakshman Pustakalaya">
                      Lakshman Pustakalaya
                    </option>
                    <option value="Lalbhai Dalpatbhai Institute of Indology, Ahmedabad">
                      Lalbhai Dalpatbhai Institute of Indology, Ahmedabad
                    </option>
                    <option value="Library of Tibetan Works and Archives, Dharamshala">
                      Library of Tibetan Works and Archives, Dharamshala
                    </option>
                    <option value="Lipika Manuscriptorium, Shantiniketan(MPC)">
                      Lipika Manuscriptorium, Shantiniketan(MPC)
                    </option>
                    <option value="Maansingh Lepcha(MPC)">
                      Maansingh Lepcha(MPC)
                    </option>
                    <option value="Mahabharat Samsodhan Mandal">
                      Mahabharat Samsodhan Mandal
                    </option>
                    <option value="Mahachulalongkornrajavidyalaya Chiang Mai Campus Thailand">
                      Mahachulalongkornrajavidyalaya Chiang Mai Campus Thailand
                    </option>
                    <option value="Maharajadhiraj Kameshwar Singh Institute of Social Sciences &amp; Research Library">
                      Maharajadhiraj Kameshwar Singh Institute of Social
                      Sciences &amp; Research Library
                    </option>
                    <option value="Majuli Collection">Majuli Collection</option>
                    <option value="Manipur State Archives, Imphal">
                      Manipur State Archives, Imphal
                    </option>
                    <option value="Manipur State Archives,Manipur (Survey)">
                      Manipur State Archives,Manipur (Survey)
                    </option>
                    <option value="Manuscript Library, Calicut University(MPC)">
                      Manuscript Library, Calicut University(MPC)
                    </option>
                    <option value="Maulana Abul Kalam Azad Arabic and Persian Research Institute,Tonk">
                      Maulana Abul Kalam Azad Arabic and Persian Research
                      Institute,Tonk
                    </option>
                    <option value="Mazhar Memorial Museum">
                      Mazhar Memorial Museum
                    </option>
                    <option value="Moolji Jaitha College, Jalgoan">
                      Moolji Jaitha College, Jalgoan
                    </option>
                    <option value="M.R.Sharma (Personal Deposite)">
                      M.R.Sharma (Personal Deposite)
                    </option>
                    <option value="Nakshatravedhashala Deva Prayaga">
                      Nakshatravedhashala Deva Prayaga
                    </option>
                    <option value="National Institute Of Prakrit Studies & Research, Shravanabelagola">
                      National Institute Of Prakrit Studies & Research,
                      Shravanabelagola
                    </option>
                    <option value="National Mission for Manuscripts">
                      National Mission for Manuscripts
                    </option>
                    <option value="Nava Nalanda Mahavihara">
                      Nava Nalanda Mahavihara
                    </option>
                    <option value="NIPSR, Sravanabelagola">
                      NIPSR, Sravanabelagola
                    </option>
                    <option value="NRLC">NRLC</option>
                    <option value="Oriental Institute, The Maharaja Sayajirao University, Baroda">
                      Oriental Institute, The Maharaja Sayajirao University,
                      Baroda
                    </option>
                    <option value="Oriental Research Institute and Manuscripts Library, Thiruvananthapuram">
                      Oriental Research Institute and Manuscripts Library,
                      Thiruvananthapuram
                    </option>
                    <option value="Oriental Research Institute, Mysore">
                      Oriental Research Institute, Mysore
                    </option>
                    <option value="Oriental Research Institute, Tirupati">
                      Oriental Research Institute, Tirupati
                    </option>
                    <option value="Orissa State Museum, Bhubaneswar">
                      Orissa State Museum, Bhubaneswar
                    </option>
                    <option value="Orissa State Museum,(Survey)">
                      Orissa State Museum,(Survey)
                    </option>
                    <option value="Patna Museum">Patna Museum</option>
                    <option value="P. G. Department of History, Sambalpur University">
                      P. G. Department of History, Sambalpur University
                    </option>
                    <option value="P. Jayaswal Research Institute, Nava Nalanda (Survey)">
                      P. Jayaswal Research Institute, Nava Nalanda (Survey)
                    </option>
                    <option value="Post Survey Rajasthan Studies">
                      Post Survey Rajasthan Studies
                    </option>
                    <option value="Purana Darbar">Purana Darbar</option>
                    <option value="Raastriya Sanskrita Sansthana (Manita Visvavidhayalaya)">
                      Raastriya Sanskrita Sansthana (Manita Visvavidhayalaya)
                    </option>
                    <option value="Rajakiya Pandulipi Pustakalaya,Allahapur">
                      Rajakiya Pandulipi Pustakalaya,Allahapur
                    </option>
                    <option value="Rajasthan Oriental Research Institute, Jodhpur">
                      Rajasthan Oriental Research Institute, Jodhpur
                    </option>
                    <option value="Rajasthan Sanskrit Academy, Jaipur">
                      Rajasthan Sanskrit Academy, Jaipur
                    </option>
                    <option value="Rampur Raza Library, Rampur">
                      Rampur Raza Library, Rampur
                    </option>
                    <option value="Rashtriya Sanskrit Sansthan, Allahabad">
                      Rashtriya Sanskrit Sansthan, Allahabad
                    </option>
                    <option value="Sampurnanand Sanskrit University (Sarasvati Bhavan)">
                      Sampurnanand Sanskrit University (Sarasvati Bhavan)
                    </option>
                    <option value="SARASVATI, Bhadrakh">
                      SARASVATI, Bhadrakh
                    </option>
                    <option value="Sarasvati Bhandar,Varanasi">
                      Sarasvati Bhandar,Varanasi
                    </option>
                    <option value="Satshrut Prabhavana Trust,Bhavanagar">
                      Satshrut Prabhavana Trust,Bhavanagar
                    </option>
                    <option value="Scindia Oriental Research Institute, Ujjain">
                      Scindia Oriental Research Institute, Ujjain
                    </option>
                    <option value="S.C.S.V.M.V(Deemed University)">
                      S.C.S.V.M.V(Deemed University)
                    </option>
                    <option value="Shahu Sanshodhan Kendra,Shivaji University Kolhapur. (MPC)">
                      Shahu Sanshodhan Kendra,Shivaji University Kolhapur. (MPC)
                    </option>
                    <option value="Shivaji University,Barr. Balasaheb Khardekar Library (S.M. Pujar)">
                      Shivaji University,Barr. Balasaheb Khardekar Library (S.M.
                      Pujar)
                    </option>
                    <option value="Śhri Jagannāth Sānskrit Vishvavidyalya">
                      Śhri Jagannāth Sānskrit Vishvavidyalya
                    </option>
                    <option value="Shri Pratap Singh (SPS) Library, Srinagar">
                      Shri Pratap Singh (SPS) Library, Srinagar
                    </option>
                    <option value="SLACJVMSS, Devprayag">
                      SLACJVMSS, Devprayag
                    </option>
                    <option value="Slarjung Museum Library, Hyderabad">
                      Slarjung Museum Library, Hyderabad
                    </option>
                    <option value="Smrithika Cultural and Charitable Trust">
                      Smrithika Cultural and Charitable Trust
                    </option>
                    <option value="S.R.C. Museum of Indology">
                      S.R.C. Museum of Indology
                    </option>
                    <option value="Sri Chandrashekharendra Saraswati Viswa Mahavidyalaya,Enathur">
                      Sri Chandrashekharendra Saraswati Viswa Mahavidyalaya,
                      Enathur
                    </option>
                    <option value="Sri Dev Kumar Jain Oriental Research Institute,Arrah">
                      Sri Dev Kumar Jain Oriental Research Institute, Arrah
                    </option>
                    <option value="Srimant Shankardeva Kalakhetra">
                      Srimant Shankardeva Kalakhetra
                    </option>
                    <option value="Sri Samartha Vagdevata Mandir (Domagaonmathasangrah )(MPC)">
                      Sri Samartha Vagdevata Mandir (Domagaonmathasangrah)(MPC)
                    </option>
                    <option value="Sri Vadiraj Research Foundation, Udupi">
                      Sri Vadiraj Research Foundation, Udupi
                    </option>
                    <option value="Sri Vedavyasa Samshodhana Kendram, Sri Subrahmanya Matha">
                      Sri Vedavyasa Samshodhana Kendram, Sri Subrahmanya Matha
                    </option>
                    <option value="SSES Research Centre, Chennai, MPC">
                      SSES Research Centre, Chennai, MPC
                    </option>
                    <option value="Sukritindra Oriental Research Institute (MPC)">
                      Sukritindra Oriental Research Institute (MPC)
                    </option>
                    <option value="Tamilnadu Survey">Tamilnadu Survey</option>
                    <option value="Tanjore Maharaja Serfoji's Saraswati Mahal Library, Thanjavur">
                      Tanjore Maharaja Serfoji's Saraswati Mahal Library,
                      Thanjavur
                    </option>
                    <option value="Telangana State Archives">
                      Telangana State Archives
                    </option>
                    <option value="The Asiatic Society">
                      The Asiatic Society
                    </option>
                    <option value="The Asiatic Society (survey)">
                      The Asiatic Society (survey)
                    </option>
                    <option value="Thunchan Memorial Trust, Tirur">
                      Thunchan Memorial Trust, Tirur
                    </option>
                    <option value="Tripura Basu (Personal Collection)">
                      Tripura Basu (Personal Collection)
                    </option>
                    <option value="University of Calcutta">
                      University of Calcutta
                    </option>
                    <option value="University of Social Sciences and Humanities, Viet Nam University, Ho Chi Minh, Vietnam">
                      University of Social Sciences and Humanities, Viet Nam
                      University, Ho Chi Minh, Vietnam
                    </option>
                    <option value="Uttar Pradesh PostSurvey">
                      Uttar Pradesh PostSurvey
                    </option>
                    <option value="Uttar Pradesh State Archives, Lucknow">
                      Uttar Pradesh State Archives, Lucknow
                    </option>
                    <option value="Uttar Pradesh Survey">
                      Uttar Pradesh Survey
                    </option>
                    <option value="Uttaranchal Sanskrit Academy, Haridwar">
                      Uttaranchal Sanskrit Academy, Haridwar
                    </option>
                    <option value="Vishveshvaranand Vishva Bandhu Institute of Sanskrit and Indological Studies, Hoshiarpur">
                      Vishveshvaranand Vishva Bandhu Institute of Sanskrit and
                      Indological Studies, Hoshiarpur
                    </option>
                    <option value="Vishwagurudeep Ashram Shodh Sansthan">
                      Vishwagurudeep Ashram Shodh Sansthan
                    </option>
                    <option value="Vrindavan Research Institute">
                      Vrindavan Research Institute
                    </option>
                    <option value="VVBIS, Hoshiarpur (Survey)">
                      VVBIS, Hoshiarpur (Survey)
                    </option>
                    <option value="Waqf Dargah Sayyad Salar Masood Ghazi(MPC)">
                      Waqf Dargah Sayyad Salar Masood Ghazi(MPC)
                    </option>
                    <option value="Yogi Vemana University,C.P.Brown Library, Kadapa">
                      Yogi Vemana University, C.P.Brown Library, Kadapa
                    </option>
                    <option value="Young Chakma Association">
                      Young Chakma Association
                    </option>
                    <option value="Others">Others (Please specify...)</option>
                  </select>
                </center>
                <br />

                <div>
                  <label className="flex flex-col p-2 w-[50%]">
                    <h2 className="font-bold">39.Flyleaf text</h2>
                    <input
                      type="text"
                      name="flyleaf_text"
                      value={form1Data.flyleaf_text || ""}
                      onChange={handleForm1InputChange}
                      required
                      placeholder="NA if not applicable"
                      // className="m-4 "
                    />
                  </label>
                  <label className="flex flex-col p-2 w-[50%]">
                    <h2 className="font-bold">40.Beginning line</h2>
                    <input
                      type="text"
                      name="Beginning_line"
                      value={form1Data.Beginning_line || ""}
                      onChange={handleForm1InputChange}
                      required
                      placeholder="NA if not applicable"
                      // className="m-4 "
                    />
                  </label>

                  <label className="flex flex-col p-2 w-[50%]">
                    <h2 className="font-bold">41.Colophon / Ending line</h2>
                    <input
                      type="text"
                      name="ColophonEnding_line"
                      value={form1Data.ColophonEnding_line || ""}
                      onChange={handleForm1InputChange}
                      required
                      placeholder="NA if not applicable"
                      // className="m-4 "
                    />
                  </label>

                  <label className="flex flex-col p-2 w-[50%]">
                    <h2 className="font-bold">
                      42.Additional Information if any
                    </h2>
                    <input
                      type="text"
                      name="add_notes"
                      value={form1Data.add_notes || ""}
                      onChange={handleForm1InputChange}
                      // className="m-4 "
                    />
                  </label>
                </div>
                <div className="flex flex-col w-[50%] ">
                  {/* <label className="font-bold">Type of Research:</label> */}

                  {/* <div className="flex flex-col">
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="ANVIL"
                            value="software"
                            checked={form1Data.ANVIL === "software"}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">ANVIL</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="Cielo24"
                            value="software"
                            checked={form1Data.cielo24 === "software"}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">Cielo24</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="CLAN"
                            value="software"
                            checked={form1Data.CLAN === ""}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">CLAN</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="ELAN"
                            value="software"
                            checked={form1Data.ELAN === ""}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">ELAN</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="transcript"
                            value="software"
                            checked={form1Data.transcript === ""}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">Transcript</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="praat"
                            value="software"
                            checked={form1Data.praat === ""}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">Praat</span>
                        </label>
                        <label className="flex items-center p-2">
                          <input
                            type="radio"
                            name="googlelens"
                            value="software"
                            checked={form1Data.googlelens === ""}
                            onChange={handleForm1InputChange}
                            // disabled={form1Data}
                          />
                          <span className="ml-2">Google Lens</span>
                        </label>
                      </div> */}
                </div>
              </div>
              <br />
              <div className="flex flex-col w-[100%] text-justify p-4">
                <div className="flex flex-col">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Declaration"
                      value="Agree"
                      checked={form1Data.Declaration === "Agree"}
                      onChange={handleForm1InputChange}
                    />
                    <p className="font-bold ml-2" id="part5">
                      I hereby declare that the details furnished above are true
                      and correct to the best of my knowledge and belief and I
                      undertake to inform you of any changes therein,
                      immediately. In case any of the above information is found
                      to be false or untrue or misleading or misrepresenting, I
                      am aware that I may be held liable for it
                      <span className="text-red-600">*</span>:
                    </p>
                  </label>
                </div>
              </div>
              {/* Add more inputs as needed */}
              <br />

              <button type="submit bg-red-900">Submit</button>
            </form>
          </center>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default One;
