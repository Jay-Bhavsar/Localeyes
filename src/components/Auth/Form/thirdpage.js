import React from 'react'
import Navbar from '../../Home/userNavbar'

function Thirdpage() {
  return (
    <>
    <Navbar/>
    <br /><br /><br /><br />
    <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
    <div className="">
        <center>
          <h2 className="mt-16 text-lg font-bold">Primary Sponsorship</h2>
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
          <center>
          <h2 className="mt-16 text-lg font-bold">Basic Data of Manuscript</h2>
        </center>
        
          <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
          Title in Catalogue :
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
          Title of MSS :
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
          Given title :
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
          Scribe :
            <input
              type="text"
              className="border-blue-700"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </label>
          <center>
          <h2 className="mt-16 text-lg font-bold">Technical Section - Manuscript Details</h2>
        </center>
        <label className="flex flex-col p-2 bg-blue-100 w-[50%] font-bold">
          Topic :
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
          	Size of manuscript in centimetres Length/Width (E.g.: 24x14):
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
           Binding Details :
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
          Date of commencement / Collection (Example: January 7, 2019):
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
          Estimated duration (E.g.: 3 Year 2 months):
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
  )
}

export default Thirdpage