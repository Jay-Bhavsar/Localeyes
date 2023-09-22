/* eslint-disable no-unused-vars */
import "./App.css";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import User from "./components/Auth/User";
import Form from "./components/Form/Form";
import Vision from "./components/Home/vision";
import Profile from "./components/Auth/Profile";
import Logout from "./components/Auth/Logout";
import One from "./components/Form/One";
import Second from "./components/Form/Second";
import Third from "./components/Form/Third";
import Fourth from "./components/Form/Fourth";
import Fifth from "./components/Form/Fifth";
import Admin from "./components/Admin/Admin";
import Researchrev from "./components/Auth/Reviewres";
import Published from "./components/Auth/Published";
import Rejected from "./components/Auth/Rejected";
import Adminapproved from "./components/Admin/Adminrejected";
import Adminrejected from "./components/Admin/Adminapproved";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Tnc from "./components/Home/Tnc";
import Privacy from "./components/Home/Privacy";
import Disclaimer from "./components/Home/Disclaimer";
import FAQ from "./components/Home/FAQ";
import Adminlogin from "./components/Auth/Adminlogin";
import AdminProtectedRoute from "./components/Auth/AdminProtected";
import Trialsearch from "./components/Home/Trialsearch";
import Advance from "./components/Home/Advance";
import Feedback from "./components/Home/Feedback";
import Sitemap from "./components/Home/Sitemap";

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
                <AdminProtectedRoute>
                  <Adminrejected />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/adminrejected"
              element={
                <AdminProtectedRoute>
                  <Adminapproved />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/adminallresearch"
              element={
            
                  <AdminProtectedRoute>
                                   <Admin />

                </AdminProtectedRoute>
              }
            />

            <Route path="/vision" element={<Vision />} />
            <Route path="/adminlogin" element={<Adminlogin />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/tnc" element={<Tnc />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/disclaimer" element={<Disclaimer />}></Route>
            <Route path="/FAQ" element={<FAQ />}></Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/trialsearch" element={<Trialsearch/>} />
            <Route path="/advancesearch" element={<Advance/>} />
            <Route path="/feedback" element={<Feedback/>} />
            <Route path="/sitemap" element={<Sitemap/>} />

            <Route path="/forgetpass" element={<ForgotPassword />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
