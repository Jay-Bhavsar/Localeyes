import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Navbar from "../Home/Adminnavbar";
import { Button, Modal } from "flowbite-react";
import Footer from "../Home/Footer";

const firebaseConfig = {
  apiKey: "AIzaSyDXg6bof6EXM7TNfQjIQxYgKdR63SjURtE",
  authDomain: "amrri-cdeb4.firebaseapp.com",
  projectId: "amrri-cdeb4",
  storageBucket: "amrri-cdeb4.appspot.com",
  messagingSenderId: "739660662641",
  appId: "1:739660662641:web:5dc201b3c017dd80ccd8d0",
  measurementId: "G-0BT7XZRL7E",
};

// firebase.initializeApp(firebaseConfig);

function Admin() {
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
        const querySnapshot = await collectionRef.get();

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

  const handleApproveResearch = (index) => {
    const updatedUsersData = [...usersData];
    updatedUsersData[index].approved = true;
    setUsersData(updatedUsersData);

    try {
      const firestore = firebase.firestore();
      const collectionRef = firestore.collection("forms");
      const documentRef = collectionRef.doc(updatedUsersData[index].Rid);

      documentRef.update({
        approved: true,
      });

      console.log("Research approved successfully!");
    } catch (error) {
      console.error("Error approving research:", error);
    }
  };
  const handleRejectResearch = (index) => {
    const updatedUsersData = [...usersData];
    updatedUsersData[index].rejected = true;
    setUsersData(updatedUsersData);

    try {
      const firestore = firebase.firestore();
      const collectionRef = firestore.collection("forms");
      const documentRef = collectionRef.doc(updatedUsersData[index].Rid);

      documentRef.update({
        rejected: true,
      });

      console.log("Research rejected successfully!");
    } catch (error) {
      console.error("Error rejecting research:", error);
    }
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
      <div className="w-[100%]">
        <center>
          <h2 className="mt-6 mb-6 text-xl font-bold">
            AMRRI FORM APPLICATIONS
          </h2>
          {usersData.length > 0 ? (
            usersData.map((userData, index) => (
              <>
                {userData.approved || userData.rejected ? (
                  <div
                    key={userData.Rid}
                    className="flex flex-row justify-evenly m-4 text-white bg-rose-900 w-[100%] rounded-md p-2 md:w-[70%]"
                  >
                    <div className="flex flex-col items-center justify-center w-[25%]">
                      <h1 className="text-xl font-bold">Public Title:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.public_title}
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[25%]">
                      <h1 className="text-xl font-bold">Scietific Title:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.sci_title}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[25%]">
                      <h1 className="text-xl font-bold">Type of Research:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.type_of_research}
                      </p>
                    </div>

                    <div key={userData.id}>
                      <button
                        className="p-2 text-blue-800 bg-white"
                        onClick={() => handleDownload(userData.Rid)}
                      >
                        Download PDF
                      </button>
                    </div>

                    <br />
                  </div>
                ) : (
                  <div
                    key={userData.Rid}
                    className="flex flex-row justify-evenly items-center  m-4 text-white bg-gray-900 w-[100%] rounded-md p-2 md:w-[70%]"
                  >
                    <div className="flex flex-col items-center justify-center w-[15%]">
                      <h1 className="text-xl font-bold">Public Title:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.public_title}
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[15%]">
                      <h1 className="text-xl font-bold">Scietific Title:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.sci_title}
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[15%]">
                      <h1 className="text-xl font-bold">Type of Research:</h1>
                      <p className="text-xl font-light">
                        {userData.form1.type_of_research}
                      </p>
                    </div>

                    <br />

                    <div className="flex flex-col w-[20%]">
                      <button
                        onClick={() => handleApproveResearch(index)}
                        className=" w-[100%] items-center  text-blue-800 bg-white font-bold m-2 "
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectResearch(index)}
                        className=" items-center  text-blue-800 bg-white font-bold m-2 w-[100%] "
                      >
                        Reject
                      </button>
                    </div>

                    <div key={userData.id} >
                      <button
                        className="p-2 text-blue-800 bg-white"
                        onClick={() => handleDownload(userData.Rid)}
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}
              </>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </center>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
