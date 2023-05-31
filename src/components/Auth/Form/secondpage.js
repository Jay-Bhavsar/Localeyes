import React from "react";
import Navbar from "../../Home/userNavbar";

function Secondpage() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="">
        
        <form>
          <label className="flex flex-col mt-10 p-2 bg-zinc-100 w-[50%] font-bold">
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
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
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
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
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
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
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
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Phone Number:
            <input
              type="number"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              // setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <label className="flex flex-col p-2 bg-zinc-100 w-[50%] font-bold">
            Email-id:
            <input
              type="number"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          {/* Add more inputs as needed */}
          <button type="submit bg-red-900">Next</button>
        </form>
      </div>
    </>
  );
}

export default Secondpage;
