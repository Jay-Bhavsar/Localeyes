import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/storage";
import Navbar from "../Home/userNavbar";
import { Button, Modal } from "flowbite-react";
import DefaultSidebar from "../Home/Sidebar";
import Footer from "../Home/Footer";

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

// firebase.initializeApp(firebaseConfig);

function Rejected() {
  const [usersData, setUsersData] = useState([]);
  const Userid = sessionStorage.getItem("uid");

  const handleDownload = async (rid) => {
    try {
      const storageRef = firebase.storage().ref();
      const pdfRef = storageRef.child(`pdfs/form_data_${Userid}_${rid}.pdf`);
      const downloadUrl = await pdfRef.getDownloadURL();

      // Trigger the download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `form_data_${Userid}_${rid}.pdf`;
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", false)
          .where("rejected", "==", true)
          .get();

        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setUsersData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsersData();
  }, []);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="w-[100%]">
        <center>
          <div className="flex flex-col justify-center">
            {/* <div>
              <DefaultSidebar />
            </div> */}
            <div>
              <h2 className="mt-6 text-xl font-bold">Rejected Researches</h2>
            </div>

            <center>
              {usersData.length > 0 ? (
                usersData.map((userData) => (
                  <>
                    <div
                      key={userData.Rid}
                      className="flex flex-row  m-4 text-white bg-rose-900 w-[100%] rounded-md p-2 md:w-[70%]"
                    >
                      <div className="flex flex-col justify-center w-[20%]">
                        <h1 className="text-xl font-bold">Research Id :</h1>
                        <p className="text-xl font-light"> {userData.Rid}</p>
                      </div>

                      <div className="flex flex-col justify-center w-[20%]">
                        <h1 className="text-xl font-bold"> Public Title :</h1>
                        <p className="text-xl font-light">
                          {userData.form1.public_title}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center w-[20%]">
                        <h1 className="text-xl font-bold">
                          Scientific Title :
                        </h1>
                        <p className="text-xl font-light">
                          {" "}
                          {userData.form1.sci_title}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center w-[20%]">
                        <h1 className="text-xl font-bold">
                          Type of Research :
                        </h1>
                        <p className="text-xl font-light">
                          {" "}
                          {userData.form1.type_of_research}
                        </p>
                      </div>

                      <div className="w-[20%] flex items-center justify-center" key={userData.id}>
                        <button
                          className="p-2 text-blue-800 bg-white"
                          onClick={() => handleDownload(userData.Rid)}
                        >
                          Download PDF
                        </button>
                      </div>
             
                    </div>
                  </>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </center>
          </div>
          {/* <Footer /> */}
        </center>
      </div>
    
    <br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default Rejected;
