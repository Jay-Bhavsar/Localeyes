import React from "react";
import Navbar from "../../Home/userNavbar";


function Form() {
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
        <h1 className="text-xl font-semibold">8 Parts of AMRRI FORM</h1>
        <div className="flex flex-col mt-2 total w-[100%] md:w-[60%] formlist border-black">
          <div className="flex flex-col items-center justify-center parts">
            <div className="flex flex-row justify-between bg-blue-500 w-[100%] text-white p-0.5 head">
              <p>Part 1</p>
              <p>
                <a href="/part1">Click</a>
              </p>
            </div>
            <div className="flex flex-col w-[100%] p-0.5 ">
              <div className="flex bg-white ">
                <ul className="flex flex-col justify-start text-left">
                  <li>1. Type of Research </li>
                  <li>2. Public Title of the Study</li>
                  <li>3. Scientific Title of the study</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center parts">
            <div className="flex flex-row justify-between bg-blue-500 w-[100%] text-white p-0.5 head">
              <p>Part 2</p>
              <p>
                <a href="/part2">Click</a>
              </p>
            </div>
            <div className="flex flex-col w-[100%] bg-white p-0.5 ">
              <div className="flex ">
                <ul className="flex flex-col justify-start text-left">
                  <li>
                    4. Details of Principal investigator or overall trail
                    coordinator (Multi-center study)
                  </li>
                  <li>5. Details of Contact person (Public Query)</li>
                  <li>6. Monetary Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center parts">
            <div className="flex flex-row justify-between bg-blue-500 w-[100%] text-white p-0.5 head">
              <p>Part 3</p>
              <p>
                <a href="/part3">Click</a>
              </p>
            </div>
            <div className="flex flex-col w-[100%] bg-white p-0.5 ">
              <div className="flex ">
                <ul className="flex flex-col justify-start text-left">
                  <li>7. Primary Sponsorship</li>
                  <li>8. BASIC DATA OF Manuscript</li>
                  <li>9. Technical Section - Manuscript details</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center parts">
            <div className="flex flex-row justify-between bg-blue-500 w-[100%] text-white p-0.5 head">
              <p>Part 4</p>
              <p>
                <a href="/part4">Click</a>
              </p>
            </div>
            <div className="flex flex-col w-[100%] bg-white p-0.5 ">
              <div className="flex ">
                <ul className="flex flex-col justify-start text-left">
                  <li>10. Script</li>
                  <li>11. Historical Data</li>
                  <li>12. Transcription Details</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center parts">
            <div className="flex flex-row justify-between bg-blue-500 w-[100%] text-white p-0.5 head">
              <p>Part 5</p>
              <p>
                <a href="/part5">Click</a>
              </p>
            </div>
            <div className="flex flex-col w-[100%] bg-white p-0.5 ">
              <div className="flex ">
                <ul className="flex flex-col justify-start text-left">
                  <li>13. Declaration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* <button className="p-4 mb-6 text-white bg-blue-500 rounded-md">Final Submission</button> */}
      </center>
    </>
  );
}

export default Form;
