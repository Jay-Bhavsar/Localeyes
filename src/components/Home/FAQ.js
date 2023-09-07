import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "./Footer";
import DefaultAccordion from "./Accordian";

function Disclaimer() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 className="mt-5 text-xl font-bold">FAQs</h2>
        <div className="mt-8">
        <DefaultAccordion/>
        </div>
      </center>
     
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Disclaimer;
