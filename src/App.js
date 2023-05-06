import './App.css';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from "./components/ProtectedRoute"
import User from './components/User';

function App() {
  return (
   <>
   <div>
   <UserAuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<ProtectedRoute><User/></ProtectedRoute>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </UserAuthContextProvider>
   </div>
   
      </>
  );
}

export default App;
