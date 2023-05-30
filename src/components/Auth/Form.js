import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";

// First Page Component
const FirstPage = ({ formData, setFormData, nextPage }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextPage();
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
  };

  return (
    <>
      <Navbar />
      <form action="" onSubmit={handleNext} className="">
        <label className="flex flex-col mt-20 bg-zinc-100 w-[50%] p-2">
          <h2 className="font-bold">Public Title of Study:</h2>
          <input
            type="text"
            className="border-blue-700"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="flex flex-col bg-zinc-100 w-[50%] p-2">
          <h2 className="font-bold">Scientific Title of Study:</h2>
          <input
            type="text"
            className="border-blue-700"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <div className="flex flex-col w-[50%] bg-zinc-100">
          <label className="font-bold">Type of Research:</label>

          <div className="flex flex-col">
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Collection</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 2"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">Catalouging</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 3"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 3"}
              />
              <span className="ml-2">Translation</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transliteration</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transcription</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Dicephering</span>
            </label>
            {/* <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Grammatical analysis or review</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Collation</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Lower Criticism</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Higher Criticism</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Critical Edition</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Others</span>
            </label> */}
          </div>
        </div>
        <button type="submit bg-red-900">Next</button>
      </form>
    </>
  );
};

// Second Page Component
const SecondPage = ({ formData, setFormData, nextPage }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h2 className="font-bold">
        Details of Principal investigator or overall trail coordinator
        (Multi-center study)
      </h2>
      <div className="">
        <form onSubmit={handleNext}>
          <label className="flex flex-col mt-10 p-2 bg-zinc-100 w-[50%] font-bold">
            Name:
            <input
              type="email"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Designation:
            <input
              type="email"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Affiliation:
            <input
              type="email"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Address:
            <input
              type="email"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Phone Number:
            <input
              type="number"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Email-id:
            <input
              type="number"
              className="border-blue-700"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          {/* Add more inputs as needed */}
          <button type="submit bg-red-900">Next</button>
        </form>
      </div>
    </div>
  );
};

// Final Page Component
const FinalPage = ({ formData, submitForm }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit form data to backend server
    try {
      await axios.post("http://localhost:5000/api/form", formData);
      console.log("Form data submitted successfully!");
      submitForm();
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <p className="mt-16">Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        {/* Display other form data as needed */}
        <button type="submit ">Submit</button>
      </form>
    </div>
  );
};

// Main Form Component
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add more form fields as needed
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const submitForm = () => {
    setCurrentPage(1);
    setFormData({
      name: "",
      email: "",
      // Reset other form fields as needed
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return(
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
        )
      case 2:
        return (
          <FirstPage
            formData={formData}
            setFormData={setFormData}
            nextPage={nextPage}
          />
        );
      case 3:
        return (
          <SecondPage
            formData={formData}
            setFormData={setFormData}
            nextPage={nextPage}
          />
        );
      case 4:
        return <FinalPage formData={formData} submitForm={submitForm} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Form;
