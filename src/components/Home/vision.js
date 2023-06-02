import React from "react";
import Navbar from "../Home/Navbar";

function Vision() {
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
      <center>
        <div className="p-4">
          <h1 className="text-xl font-bold">Vision</h1>
          <br />
          <br />
          <center>
            <ul className="ml-20 text-justify list-disc ">
              <li>
                Ensuring that every research conducted in relation to Ayurveda
                Manuscript in India is prospectively registered with full
                disclosures of the available data set items.
              </li>
              <li>
                Providing vital research backup for the advancing studies in the
                field of Ayurveda Manuscriptology.
              </li>
              <li>
                Improving the quality of manuscripts related to Ayurveda
                Manuscriptology.
              </li>
            </ul>
          </center>
          <br />
          <br />
          <h1 className="text-xl font-bold">Mission</h1>
          <br />
          <br />
          <ul className="ml-20 text-justify list-disc">
            <li>
              Providing a unique registration number for all research related to
              Ayurveda Manuscriptology.
            </li>
          </ul>
        </div>
      </center>
    </>
  );
}

export default Vision;
