import React, { useState } from "react";

const SecurityCode = ({ correctCode, onSuccess }) => {
  const [enteredCode, setEnteredCode] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setEnteredCode(event.target.value);

    if (enteredCode === correctCode) {
      onSuccess();
    } else {
      // Handle incorrect code
      console.log("Incorrect code");
    //   alert("the security code is incorrect");

    }
  };

  return (
    <label>
      Security Code:
      <input type="text" value={enteredCode} onChange={handleChange} />
    </label>
  );
};

export default SecurityCode;
