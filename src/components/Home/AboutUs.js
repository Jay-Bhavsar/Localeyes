import React from "react";
import "../Style/Home.css";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 mb-10">
        <h1 className="text-4xl font-semibold text-rose-900 md:text-5xl">About Us</h1>

        <p className="mt-8 text-lg text-justify w-[90%] md:w-[70%]">
          National Institute of Ayurveda, Deemed to be University (De novo) is
          an apex autonomous Institute under the aegis of Ministry of AYUSH,
          Government of India. NIA was conferred the Deemed to be University
          status under De novo category and was dedicated to the Nation by the
          Honourable Prime Minister of India, Shri Narendra Modi on 13th
          Novemeber 2020 (…Ayurveda Day). NIA is the first Central Government
          funded Institute to be declared as Deemed to be University in the
          field of Ayush. 
        </p>
      </div>
    </>
  );
}

export default AboutUs;
