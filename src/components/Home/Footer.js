import React from "react";

function Footer() {
  return (
    <>
      <div className="z-10 flex flex-col">
        <div className="flex flex-col p-4 text-white justify-evenly bg-rose-900 md:flex-row">
          <div>
            <h2 className="text-lg font-bold">About Us</h2>
            <ul className="p-1">
              <a href="/vision">
                <li>About Us</li>
              </a>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Legal</h2>
            <ul className="p-1">
              <a href="/disclaimer">
                <li>Disclaimer</li>
              </a>
              <a href="/faq">
                <li>FAQs</li>
              </a>
              <a href="/privacy">
                <li>Privacy Policy</li>
              </a>
              <a href="/tnc">
                <li>Terms and Conditions</li>
              </a>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <ul>
              <li className="w-[300px]">
                Department of Ayurveda Manuscriptology National Institute of
                Ayurveda(DU) Jorawar Singh Gate, Amer Road, Jaipur - 302002
                (Rajasthan) India Locate: https://goo.gl/maps/FpyRKijexGDXsAio7
                Email - nodalagency.ayu.mss@nia.edu.in www.amrri.com
                www.ayumss.com
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-around p-4 text-white bg-rose-900 md:flex-row ">
          <div><h2 className="font-bold">Copyright 2022 All Rights Reaserved NIA,JAIPUR</h2></div>
          <div>
            <h2 className="font-bold">Designed by NIA JAIPUR</h2>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
