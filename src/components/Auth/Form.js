import React, { useState } from "react";
import axios from "axios";

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
      {/* <div>
        <h2 className="">First Page</h2>
        <form onSubmit={handleNext}>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
        
          <button type="submit bg-red-900">Next</button>
        </form>
      </div>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="mb-4 text-xl font-bold">Checkbox Form</h1>
        <form onSubmit={handleNext}>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Option 1</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 2"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">Option 2</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 3"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 3"}
              />
              <span className="ml-2">Option 3</span>
            </label>
          </div>
        </form>
      </div> */}

      <form action="" onSubmit={handleNext}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <div className="mx-3 mt-8 w-[10%] ">
          {/* <h1 className="mb-4 text-xl font-bold">Checkbox Form</h1> */}
          <label>
            Type of Research:
          </label>

          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Collection</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 2"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">Catalouging</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 3"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 3"}
              />
              <span className="ml-2">Translation</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transliteration</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transcription</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Option 1"
                onChange={handleCheckboxChange}
                checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Dicephering</span>
            </label>
            <label className="flex items-center">
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
            </label>
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
      <h2>Second Page</h2>
      <form onSubmit={handleNext}>
        <label>
          Email:
          <input
            type="email"
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
      <h2>Final Page</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: {formData.name}</p>
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
        return (
          <FirstPage
            formData={formData}
            setFormData={setFormData}
            nextPage={nextPage}
          />
        );
      case 2:
        return (
          <SecondPage
            formData={formData}
            setFormData={setFormData}
            nextPage={nextPage}
          />
        );
      case 3:
        return <FinalPage formData={formData} submitForm={submitForm} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Form;
