import React from "react";
import Navbar from "../../Home/userNavbar";

function Fourthpage() {
  return (
    <>
      <Navbar />
      <br />
      <br /><br /><br />
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <div className="">
        <center>
          <h2 className="mt-10 text-lg font-bold">Historical Details</h2>
        </center>

        <form>
          <label className="flex flex-col  p-2 bg-blue-100 w-[50%] font-bold">
            Year in MSS :
            <input
              type="email"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Date Data :
            <input
              type="email"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Place of Writing :
            <input
              type="email"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            STATE & UNION TERRITORIES :
            <input
              type="email"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            CITY/VILLAGE :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              // setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Attach an authorization document from the Institute/ repository,
            where the MSS is collected.:
            <input
              type="file"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>

          <center>
            <h2 className="mt-16 text-lg font-bold">Transcription Details</h2>
          </center>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Cover Page Text :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Flyleaf Text :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Colophone Text :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Begin Text :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Begin Text(Human readable) :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
            Additional Notes :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <div className="flex flex-col w-[50%] bg-blue-100">
          <label className="font-bold">SOFTWARE'S (Intent to use):</label>

          <div className="flex flex-col">
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">ANVIL (Annotation of video and Language Data) </span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 2"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">Cielo24</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 3"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 3"}
              />
              <span className="ml-2">CLAN (Computerized Language Analysis) </span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">ELAN ( EUDICO Linguistic Annotator)</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transcript</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Praat</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Google Lens</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Others</span>
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
          {/* Add more inputs as needed */}
          <button type="submit bg-red-900">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Fourthpage;
