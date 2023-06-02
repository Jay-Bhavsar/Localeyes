import React from 'react'
import Navbar from '../../Home/userNavbar'

function Fifthpage() {
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
        <h2 className="mt-10 text-lg font-bold">Declaration</h2>
      </center>
      
      <form action="" className="">
       
      
        <div className="flex flex-col w-[50%] bg-blue-100 p-4">
          <label className="font-bold text-justify">I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it.</label>

          <div className="flex flex-col">
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 1"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 1"}
              />
              <span className="ml-2">I Agree</span>
            </label>
            <label className="flex items-center p-2">
              <input
                type="radio"
                name="option"
                value="Option 2"
                // onChange={handleCheckboxChange}
                // checked={selectedOption === "Option 2"}
              />
              <span className="ml-2">I Disagree</span>
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
        <button type="submit bg-red-900">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Fifthpage