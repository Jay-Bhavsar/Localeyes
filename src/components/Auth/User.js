import React,{useState,useEffect} from "react";
import Navbar from "../../components/Home/userNavbar";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { db } from "../../firebase";

function User() {
  const Userid = sessionStorage.getItem("uid");
  
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
                  1
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
                <td class="px-6 py-4 font-xl">0</td>
             
              </tr>
              <tr class="bg-white dark:bg-blue-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-xl text-blue-900 whitespace-nowrap dark:text-black"
                >
                  Registered Researches
                </th>
                <td class="px-6 py-4">0</td>
              
              </tr>
              <tr class="bg-white dark:bg-blue-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-xl text-blue-900 whitespace-nowrap dark:text-black"
                >
                  Terminated/Suspended Researches
                </th>
                <td class="px-6 py-4">0</td>
              
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
