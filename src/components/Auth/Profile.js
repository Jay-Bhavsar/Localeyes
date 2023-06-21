import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Navbar from "../Home/userNavbar";

const Userid = sessionStorage.getItem("uid");

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: "AIzaSyDXg6bof6EXM7TNfQjIQxYgKdR63SjURtE",
  authDomain: "amrri-cdeb4.firebaseapp.com",
  projectId: "amrri-cdeb4",
  storageBucket: "amrri-cdeb4.appspot.com",
  messagingSenderId: "739660662641",
  appId: "1:739660662641:web:5dc201b3c017dd80ccd8d0",
  measurementId: "G-0BT7XZRL7E",
};

firebase.initializeApp(firebaseConfig);

function Profile() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const firestore = firebase.firestore();
        const documentRef = firestore.collection("users").doc(Userid);
        const documentSnapshot = await documentRef.get();

        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          console.log(data);
          setDocumentData(data);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocumentData();
  }, []);

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
      <div>
        <center>
          <h2 className="mt-6 mb-6 text-xl font-bold">User Profile</h2>
          {documentData ? (
            <div className="shadow-xl w-[50%] p-10 flex flex-col items-start">
              <h1 className="text-xl font-bold">
                Login ID :
                <span className="text-xl font-light">
                  {documentData.loginId}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Firstname :
                <span className="text-xl font-light">
                {documentData.firstname}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Lastname :
                <span className="text-xl font-light">
                {documentData.lastname}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Official Address :
                <span className="text-xl font-light">
                    {documentData.officialAddress}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Gender :
                <span className="text-xl font-light">
                    {documentData.gender}
                </span>
              </h1>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </center>
      </div>
    </>
  );
}

export default Profile;
