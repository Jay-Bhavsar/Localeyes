import React from "react";
import Navbar from "./Navbar";
import "../Style/Home.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
     <br /><br /><br />
      <br />
      <div className="text-center oneliner">
        <h1>'Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <Hero/>
      
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default Home;
