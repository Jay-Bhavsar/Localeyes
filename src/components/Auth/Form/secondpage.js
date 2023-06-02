import React from "react";
import Navbar from "../../Home/userNavbar";

function Secondpage() {
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
          <h2 className="mt-10 text-lg font-bold">Details of Principal investigator or overall trail coordinator (Multi-center study)</h2>
        </center>
        
        <form>
          <label className="flex flex-col  p-2 bg-blue-100 w-[50%] font-bold">
            Name:
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
            Designation:
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
            Affiliation:
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
            Address:
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
            Phone Number:
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
            Email-id:
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          {/* Add more inputs as needed */}
          <button type="submit bg-red-900">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Secondpage;
