import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <UserAuthContextProvider/>
      </>
  );
}

export default App;
