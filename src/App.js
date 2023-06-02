import "./App.css";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import User from "./components/Auth/User";
import Form from "./components/Auth/Form/Form";
import Firstpage from "./components/Auth/Form/firstpage";
import Secondpage from "./components/Auth/Form/secondpage";
import Thirdpage from "./components/Auth/Form/thirdpage";
import Fourthpage from "./components/Auth/Form/fourthpage";
import Fifthpage from "./components/Auth/Form/fifthpage";
import Vision from "./components/Home/vision";

function App() {
  return (
    <>
      <div>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route path="/part1" element={<Firstpage/>} />
            <Route path="/part2" element={<Secondpage/>} />
            <Route path="/part3" element={<Thirdpage/>} />
            <Route path="/part4" element={<Fourthpage/>} />
            <Route path="/part5" element={<Fifthpage/>} />
            <Route path="/vision" element={<Vision/>} />


            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
