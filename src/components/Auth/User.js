import React,{useState,useEffect} from "react";
import Navbar from "../../components/Home/userNavbar";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { db } from "../../firebase";

function User() {
  const Userid = sessionStorage.getItem("uid");
  
  const [count, setCount] = useState(0);
  const [rejectedres, setRejectedres] = useState([]);
  const [approvedres, setApprovedres] = useState([]);
  const [reviewres, setReviewres] = useState([]);



  useEffect(() => {
    const rejectedresnumber = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", false)
          .where("rejected","==",true)
          .get();
  
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setRejectedres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const approvedresnumber = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", true)
          .where("rejected","==",false)
          .get();
  
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setApprovedres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const resinreview = async () => {
      try {
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("forms");
        const querySnapshot = await collectionRef
          .where("uid", "==", Userid)
          .where("approved", "==", false)
          .where("rejected","==",false)
          .get();
  
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
          };
        });
        setApprovedres(data);
        console.log(data);
        console.log("Array Length:", data.length); // Get the length of the data array
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    rejectedresnumber();
    approvedresnumber();
    resinreview();
  }, []);
  

  return (
    <>
      <Navbar />
      <br /> <br />
      <br />
      <br />
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        <br />

        <Link to="/form">
          <button className="p-2 text-white bg-blue-500 rounded-md">
            Click here to fill out the AMMRI Form
          </button>
        </Link>
        <br />
      </center>
      <br />
      <center>
        <div class="relative overflow-x-auto">
          <table class="w-[50%] text-sm text-left text-black dark:text-black">
            <thead class="text-xs text-blue-100 uppercase bg-blue-50 dark:bg-blue-100 dark:text-black">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Total Researches
                </th>
                
                <th scope="col" class="px-6 py-3">
                  {reviewres.length+rejectedres.length+approvedres.length}
                </th>
              </tr>
            </thead>
            <tbody>
              
              <tr class="bg-white border-b dark:bg-blue-100 dark:border-blue-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-xl text-blue-900 whitespace-nowrap dark:text-black"
                >
                  Under Review Stage
                </th>
                <td class="px-6 py-4 font-xl">{reviewres.length}</td>
             
              </tr>
              <tr class="bg-white dark:bg-blue-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-xl text-blue-900 whitespace-nowrap dark:text-black"
                >
                  Registered Researches
                </th>
                <td class="px-6 py-4">{approvedres.length}</td>
              
              </tr>
              <tr class="bg-white dark:bg-blue-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-xl text-blue-900 whitespace-nowrap dark:text-black"
                >
                  Terminated/Suspended Researches
                </th>
                <td class="px-6 py-4">{rejectedres.length}</td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </center>
      <div className="mt-44">
        <Footer />
      </div>
    </>
  );
}

export default User;
