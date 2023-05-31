import React from 'react'
import Navbar from '../../Home/userNavbar'

export default function Firstpage() {
  return (
    <>
    <Navbar/>
    <form action="" className="">
        <label className="flex flex-col mt-20 bg-zinc-100 w-[50%] p-2">
          <h2 className="font-bold">Public Title of Study:</h2>
          <input
            type="text"
            className="border-blue-700"
            // value={formData.name}
            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="flex flex-col bg-zinc-100 w-[50%] p-2">
          <h2 className="font-bold">Scientific Title of Study:</h2>
          <input
            type="text"
            className="border-blue-700"
            // value={formData.name}
            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Collection</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 2"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">Catalouging</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 3"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 3"}
              />
              <span className="ml-2">Translation</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transliteration</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">Transcription</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
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
  )
}
