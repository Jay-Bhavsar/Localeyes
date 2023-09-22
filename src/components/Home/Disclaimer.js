import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "./Footer";

function Disclaimer() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="w-[90%] text-lg text-justify shadow-xl p-7 md:w-[70%] rounded-lg">
            <center>
              <h2 className="mt-5 text-xl font-bold">Disclaimer</h2>
            </center>
            <br />
            Registration of the study on this site does not reflect endorsement
            or Approval by the Ayurveda Manuscript Research Registry of India
            (www.amrri.in) Website The information displayed on the Website is
            uploaded by study aspirants / Scholars, sponsors, and investigators.
            AMRRI website does not take any responsibility for the legal,
            ethical and scientific, validity of the submitted information.
           
          </p>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Disclaimer;
