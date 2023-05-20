import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [randomUsername, setRandomUsername] = useState('');
  const [randomPassword, setRandomPassword] = useState('');

  const generateRandomUsername = () => {
    const username = Math.random().toString(36).substring(7);
    setRandomUsername(username);
  };

  const generateRandomPassword = () => {
    const password = Math.random().toString(36).substring(7);
    setRandomPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email with random username and password
    axios.post('/send-email', {
      email,
      username: randomUsername,
      password: randomPassword
    })
      .then(response => {
        console.log(response.data);
        // Handle success or show a confirmation message to the user
      })
      .catch(error => {
        console.log(error);
        // Handle error or show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <br />
      <button type="button" onClick={generateRandomUsername}>
        Generate Random Username
      </button>
      <br />
      <button type="button" onClick={generateRandomPassword}>
        Generate Random Password
      </button>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
