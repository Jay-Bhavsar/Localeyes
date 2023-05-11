import React from "react";
import Navbar from "./Navbar";
import "../Style/Home.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <Navbar />
      <div className="oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <Hero/>
      <AboutUs/>
    </>
  );
}

export default Home;
