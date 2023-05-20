import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";

function User() {
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  const questions = [
    {
      id: 1,
      text: "Trial Details",
      label1: "Trial Subject",
      label2: "Description",
      label3: "Prototype",
    },
    {
      id: 2,
      text: "Personal Details",
      label1: "Name",
      label2: "Age",
      label3: "College Name",
    },
    {
      id: 3,
      text: "Ayurvedic Details",
      label1: "Field of Ayurveda",
      label2: "Source of Research",
      label3: "Documentation",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [formValue2, setFormValue2] = useState("");
  const [formValue3, setFormValue3] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();
    const answer = formValue.trim();
    const answer2 = formValue2.trim();
    const answer3 = formValue3.trim();

    if (answer && answer2 && answer3) {
      setAnswers([...answers, answer, answer2, answer3]);
      setFormValue("");
      setFormValue2("");
      setFormValue3("");
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <>
        <h2 className="mb-4 text-2xl">{question.text}</h2>
        <br />

        <div className="flex flex-col items-center">
          <form onSubmit={handleAnswer} className="w-full max-w-lg shadow-2xl">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  {question.label1}
                </label>

                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="answer"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  {question.label2}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="answer2"
                  value={formValue2}
                  onChange={(e) => setFormValue2(e.target.value)}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  {question.label3}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="answer3"
                  value={formValue3}
                  onChange={(e) => setFormValue3(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };



  const renderResult = () => {
    const question = questions[currentQuestion];

    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl">Form submitted!</h2>
        <p className="flex flex-col items-center justify-center text-lg">
          {answers.map(s=><React.Fragment>{s}<br/></React.Fragment>)}
        </p>
      </div>
    );
  };

  const resetForm = () => {
    setAnswers([]);
    setFormValue("");
    setFormValue2("");
    setFormValue3("");
    setCurrentQuestion(0);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* hello {user && user.email}
      <div>Home</div> */}
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-md mx-auto">
          {currentQuestion < questions.length ? (
            renderQuestion()
          ) : (
            <div>
              {renderResult()}
              {/* <button
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
                onClick={resetForm}
              >
                Final Submission
              </button> */}
            </div>
          )}
        </div>
      </div>

      <center>
        <button
          onClick={handleLogout}
          className="p-2 text-white bg-blue-500 rounded-sm shadow-sm cursor-pointer"
        >
          Log Out
        </button>
      </center>
    </>
  );
}

export default User;
