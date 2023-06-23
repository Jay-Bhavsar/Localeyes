/* eslint-disable no-unused-vars */
import "./App.css";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import User from "./components/Auth/User";
import Form from "./components/Auth/Form/Form";
import Vision from "./components/Home/vision";
import Profile from "./components/Auth/Profile";
import Logout from "./components/Auth/Logout";
import One from "./components/Auth/Form/One";
import Second from "./components/Auth/Form/Second";
import Third from "./components/Auth/Form/Third";
import Fourth from "./components/Auth/Form/Fourth";
import Fifth from "./components/Auth/Form/Fifth";
import Admin from "./components/Auth/Admin/Admin";
import Researchrev from "./components/Auth/Reviewres";
import Published from "./components/Auth/Published";
import Rejected from "./components/Auth/Rejected";
import Adminapproved from "./components/Auth/Admin/Adminapproved";
import Adminrejected from "./components/Auth/Admin/Adminrejected";
// import Form3 from "./components/Auth/Form/Form1";

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
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path="/form"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path="/part1"
              element={
                <ProtectedRoute>
                  <One />
                </ProtectedRoute>
              }
            />
            <Route
              path="/part2"
              element={
                <ProtectedRoute>
                  <Second />
                </ProtectedRoute>
              }
            />
            <Route
              path="/part3"
              element={
                <ProtectedRoute>
                  <Third />
                </ProtectedRoute>
              }
            />
            <Route
              path="/part4"
              element={
                <ProtectedRoute>
                  <Fourth />
                </ProtectedRoute>
              }
            />
            <Route
              path="/part5"
              element={
                <ProtectedRoute>
                  <Fifth />
                </ProtectedRoute>
              }
            />
          
            <Route
              path="/review"
              element={
                <ProtectedRoute>
                  <Researchrev />
                </ProtectedRoute>
              }
            />
            <Route
              path="/published"
              element={
                <ProtectedRoute>
                  <Published />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rejected"
              element={
                <ProtectedRoute>
                  <Rejected />
                </ProtectedRoute>
              }
            />

            <Route
              path="/adminapproved"
              element={
                <ProtectedRoute>
                  <Adminapproved/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminrejected"
              element={
                <ProtectedRoute>
                 <Adminrejected/>
                </ProtectedRoute>
              }
            />
             <Route
              path="/adminallresearch"
              element={
                <ProtectedRoute>
                  <Admin/>
                </ProtectedRoute>
              }
            />

            <Route path="/vision" element={<Vision />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
