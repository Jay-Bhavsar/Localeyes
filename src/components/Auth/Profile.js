import React, { useEffect, useState } from "react";
import UserDataService from "../services/user.services";
import Navbar from '../Home/userNavbar'
const Profile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Navbar/>
      <br /><br /><br /><br />
      {users.map((doc, index) => {
        return (
          <center>
            <div>
              <div key={doc.id} className="flex flex-col items-center justify-center ">
                <p>{index+1}</p>
                <p>Email:{doc.email}</p>
                <p>Username:{doc.username}</p>
                <p>Firstname:{doc.firstname}</p>
                <p>Lastname:{doc.lastname}</p>
                <p>Address:{doc.address}</p>
              </div>
            </div>
          </center>
        );
      })}
    </>
  );
};

export default Profile;
