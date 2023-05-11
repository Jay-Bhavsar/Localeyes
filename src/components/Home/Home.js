import React from "react";
import Navbar from "./Navbar";
import "../Style/Home.css";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Navbar />
      <div className="oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <Hero/>
    </>
  );
}

export default Home;
