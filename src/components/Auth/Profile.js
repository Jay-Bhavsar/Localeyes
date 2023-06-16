import React,{useState,useEffect} from 'react'
import userDataService from '../services/user.services'

function Profile() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await userDataService.getAllUsers();
    console.log(data);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Address</th>
        <th>Email</th>

      </tr>
    </thead>
    <tbody>
      {books.map((doc, index) => {
        return (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.username}</td>
            <td>{doc.firstname}</td>
            <td>{doc.lastname}</td>
            <td>{doc.address}</td>
            <td>{doc.email}</td>
          </tr>
        );
      })}
    </tbody>
</>
  )
}

export default Profile