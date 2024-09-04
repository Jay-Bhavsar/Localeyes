import React from "react";
import Navbar from "./Navbar";
import "../Style/Home.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
const dmash = require("../img/dmash.png");
const sanjeev = require("../img/sanjeev.png");
const sarban = require("../img/sarban.png");

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <Hero />
      <div className="flex flex-col justify-between mt-10 shadow-sm md:flex-row">
        <div className="flex flex-col items-center justify-center p-4 shadow-2xl">
          <center>
          <img src={dmash} alt="" className="rounded-full w-[60%] shadow-2xl" height="200px" width="200px" />
          <br />
          <h2 className="text-xl font-bold">Padmashree Vd. Rajesh Kotecha</h2>
          <p className="text-lg font-normal">Secretary</p>
          <p className="text-lg font-normal">Ministry of Ayush</p>
          </center>
         
        </div>
        <div className="flex flex-col items-center justify-center p-4 shadow-2xl">
          <center>
          <img
            src={sanjeev}
            alt=""
            className="rounded-full w-[60%] shadow-2xl"
          />
          <br />
          <h2 className="text-xl font-bold">Prof. Sanjeev Sharma</h2>
          <p className="text-lg font-normal">Vice Chancellor</p>
          <p className="text-lg font-normal">NIA, Jaipur.</p>
          </center>
       
        </div>
        <div className="flex flex-col items-center justify-center p-4 shadow-2xl">
          <center>
          <img
            src={sarban}
            alt=""
            className="rounded-full w-[50%] shadow-2xl"
          />
          <br />
          <h2 className="text-xl font-bold">Shri Sarbananda Sonowal</h2>
          <p className="text-lg font-normal">
            Hon'ble Cabinet Minister Ministry of Ayush
          </p>
          <p className="text-lg font-normal">&</p>
          <p className="text-lg font-normal">
            Ministry of Ports, Shipping and Waterways.
          </p>
          </center>
         
        </div>
      </div>
      <br />
      <br />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
