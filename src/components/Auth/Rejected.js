import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Navbar from "../Home/userNavbar";
import { Button, Modal } from "flowbite-react";

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
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <div className="w-[100%]">
        <center>
          <h2 className="mt-6 mb-6 text-xl font-bold">
            AMRRI FORM APPLICATIONS
          </h2>
          {usersData.length > 0 ? (
            usersData.map((userData) => (
              <>
                <div
                  key={userData.Rid}
                  className="flex flex-col items-start m-4 text-white bg-rose-900 w-[100%] rounded-md p-4 md:w-[30%]"
                >
                  <h1 className="text-xl font-bold">
                    AMRRI FORM OF User-Id :
                    <span className="text-xl font-light"> {userData.uid}</span>
                  </h1>
                  <h1 className="text-xl font-bold">
                    Research Id :
                    <span className="text-xl font-light"> {userData.Rid}</span>
                  </h1>
                  <br />
                  <h1 className="text-xl font-bold">Form1:</h1>
                  <h1 className="text-xl font-bold">
                    Public Title:
                    <span className="text-xl font-light">
                      {userData.form1.public_title}
                    </span>
                  </h1>
                  <h1 className="text-xl font-bold">
                    Scietific Title:
                    <span className="text-xl font-light">
                      {userData.form1.sci_title}
                    </span>
                  </h1>
                  <h1 className="text-xl font-bold">
                    Type of Research:
                    <span className="text-xl font-light">
                      {userData.form1.type_of_research}
                    </span>
                  </h1>
                  <br />
                  <Button onClick={() => props.setOpenModal("default")}>
                     Show More
                  </Button>
                  <Modal
                    show={props.openModal === "default"}
                    onClose={() => props.setOpenModal(undefined)}
                  >
                    <Modal.Header>Other Details</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <h1 className="text-xl font-bold">
                            Details of Principal investigator or overall trail
                            coordinator (Multi-center study):
                          </h1>
                          <h1 className="text-xl font-bold">
                            Name:
                            <span className="text-xl font-light">
                              {userData.form1.name}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Affiliation:
                            <span className="text-xl font-light">
                              {userData.form1.Affiliation}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Phone No.:
                            <span className="text-xl font-light">
                              {userData.form1.Phno}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Designation:
                            <span className="text-xl font-light">
                              {userData.form1.designation}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Email:
                            <span className="text-xl font-light">
                              {userData.form1.email}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Name:
                            <span className="text-xl font-light">
                              {userData.form1.name}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Public Query Affifliation :
                            <span className="text-xl font-light">
                              {userData.form1.Public_Query_affiliation}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Public Query Designation:
                            <span className="text-xl font-light">
                              {userData.form1.Public_Query_designation}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Public Query Name:
                            <span className="text-xl font-light">
                              {userData.form1.Public_Query_name}
                            </span>
                          </h1>
                          <br />
                          <h2 className="text-xl font-bold">Form3:</h2>
                          <h1 className="text-xl font-bold">
                            MSS Owner :
                            <span className="text-xl font-light">
                              {userData.form1.MSS_owner}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Title :
                            <span className="text-xl font-light">
                              {userData.form1.MSS_title}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Topic :
                            <span className="text-xl font-light">
                              {userData.form1.Manu_Topic}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Binding :
                            <span className="text-xl font-light">
                              {userData.form1.Manu_binding}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Subject :
                            <span className="text-xl font-light">
                              {userData.form1.Manu_Subject}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Size :
                            <span className="text-xl font-light">
                              {userData.form1.Manu_size}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Primary Sponsorship Address:
                            <span className="text-xl font-light">
                              {userData.form1.Prim_Sponsorship_address}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Primary Sponsorship Name:
                            <span className="text-xl font-light">
                              {userData.form1.Prim_Sponsorship_name}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Author:
                            <span className="text-xl font-light">
                              {userData.form1.author}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Catalog Title:
                            <span className="text-xl font-light">
                              {userData.form1.catalog_title}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Date of Collection :
                            <span className="text-xl font-light">
                              {userData.form1.date_of_collection}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Duration :
                            <span className="text-xl font-light">
                              {userData.form1.duration}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Given Title :
                            <span className="text-xl font-light">
                              {userData.form1.given_title}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Scribe :
                            <span className="text-xl font-light">
                              {userData.form1.scribe}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Status :
                            <span className="text-xl font-light">
                              {userData.form1.status}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Subject :
                            <span className="text-xl font-light">
                              {userData.form1.subject}
                            </span>
                          </h1>
                          <br />
                          <h1 className="text-xl font-bold">Form4 : </h1>
                          <h1 className="text-xl font-bold">
                            Date_Samvat :
                            <span className="text-xl font-light">
                              {userData.form1.Date_Samvat}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Language :
                            <span className="text-xl font-light">
                              {userData.form1.Language}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS year :
                            <span className="text-xl font-light">
                              {userData.form1.MSS_Year}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            MSS Condition :
                            <span className="text-xl font-light">
                              {userData.form1.MSS_condition}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Manu Date Christian :
                            <span className="text-xl font-light">
                              {userData.form1.Manu_date_christian}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Material :
                            <span className="text-xl font-light">
                              {userData.form1.Material}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Script :
                            <span className="text-xl font-light">
                              {userData.form1.Script}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            City/Village :
                            <span className="text-xl font-light">
                              {userData.form1.city_village}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Data Date :
                            <span className="text-xl font-light">
                              {userData.form1.data_data}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            ManuScript Source :
                            <span className="text-xl font-light">
                              {userData.form1.manu_source}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            Place of Writing :
                            <span className="text-xl font-light">
                              {userData.form1.place_of_writing}
                            </span>
                          </h1>
                          <h1 className="text-xl font-bold">
                            State/Union Teritory :
                            <span className="text-xl font-light">
                              {userData.form1.states_union}
                            </span>
                          </h1>
                          <br />
                          <h1 className="text-xl font-bold">
                            Declaration :
                            <span className="text-xl font-light">
                              {userData.form1.Declaration}
                            </span>
                          </h1>
                        </p>
                      </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button onClick={() => props.setOpenModal(undefined)}>
                        I accept
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => props.setOpenModal(undefined)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer> */}
                  </Modal>
                
                </div>
                
              </>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </center>
      </div>
    </>
  );
}

export default Rejected;
