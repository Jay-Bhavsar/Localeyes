import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Navbar from "../Home/userNavbar";


const Userid = sessionStorage.getItem("uid");


function Profile() {
  const [documentData, setDocumentData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const firestore = firebase.firestore();
        const userRef = firestore.collection("users");
        const userDoc = await userRef.doc(sessionStorage.getItem("uid")).get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setDocumentData(userData);
          setEditedData(userData);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error retrieving document:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = (field) => {
    setIsEditing((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleUpdate = async (field) => {
    try {
      const firestore = firebase.firestore();
      const documentRef = firestore.collection("users").doc(Userid);

      await documentRef.update({
        [field]: editedData[field],
      });

      setIsEditing((prevState) => ({ ...prevState, [field]: false }));
      setDocumentData((prevState) => ({
        ...prevState,
        [field]: editedData[field],
      }));
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevState) => ({ ...prevState, [name]: value }));
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
      <div>
        <center>
          <h2 className="mt-6 mb-6 text-xl font-bold">User Profile</h2>
          {documentData ? (
            <div className="shadow-xl w-[50%] p-10 flex flex-col items-start justify-around">
              <h1 className="text-xl font-bold">
                Login Id:
                {isEditing.loginId ? (
                  <>
                    <input
                      type="text"
                      name="loginId"
                      value={editedData.loginId}
                      onChange={handleInputChange}
                      className="p-1 ml-2 bg-blue-300 rounded-md"
                    />
                    <button
                      onClick={() => handleUpdate("loginId")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-xl font-light">
                      {documentData.loginId}
                    </span>
                    <button
                      onClick={() => handleEdit("loginId")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Edit
                    </button>
                  </>
                )}
              </h1>
              <br />
              <h1 className="text-xl font-bold">
                Firstname:{" "}
                {isEditing.firstname ? (
                  <>
                    <input
                      type="text"
                      name="firstname"
                      value={editedData.firstname}
                      onChange={handleInputChange}
                      className="p-1 ml-2 bg-blue-300 rounded-md"
                    />
                    <button
                      onClick={() => handleUpdate("firstname")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-xl font-light">
                      {documentData.firstname}
                    </span>
                    <button
                      onClick={() => handleEdit("firstname")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Edit
                    </button>
                  </>
                )}
              </h1>
              <br />
              <h1 className="text-xl font-bold">
                Lastname:{" "}
                {isEditing.lastname ? (
                  <>
                    <input
                      type="text"
                      name="lastname"
                      value={editedData.lastname}
                      onChange={handleInputChange}
                      className="p-1 ml-2 bg-blue-300 rounded-md"
                    />
                    <button
                      onClick={() => handleUpdate("lastname")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-xl font-light">
                      {documentData.lastname}
                    </span>
                    <button
                      onClick={() => handleEdit("lastname")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Edit
                    </button>
                  </>
                )}
              </h1>
              <br />
              <h1 className="text-xl font-bold">
                Official Address:{" "}
                {isEditing.officialAddress ? (
                  <>
                    <input
                      type="text"
                      name="officialAddress"
                      value={editedData.officialAddress}
                      onChange={handleInputChange}
                      className="p-1 ml-2 bg-blue-300 rounded-md"
                    />
                    <button
                      onClick={() => handleUpdate("officialAddress")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-xl font-light">
                      {documentData.officialAddress}
                    </span>
                    <button
                      onClick={() => handleEdit("officialAddress")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Edit
                    </button>
                  </>
                )}
              </h1>
              <br />
              <h1 className="text-xl font-bold">
                Gender:{" "}
                {isEditing.gender ? (
                  <>
                    <input
                      type="text"
                      name="gender"
                      value={editedData.gender}
                      onChange={handleInputChange}
                      className="p-1 ml-2 bg-blue-300 rounded-md"
                    />
                    <button
                      onClick={() => handleUpdate("gender")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-xl font-light">
                      {documentData.gender}
                    </span>
                    <button
                      onClick={() => handleEdit("gender")}
                      className="p-1 ml-2 bg-blue-300 rounded-md shadow-md"
                    >
                      Edit
                    </button>
                  </>
                )}
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
