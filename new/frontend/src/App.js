import logo from './logo.svg';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Notes from './Components/Notes';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Backend connect</h1>

      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="notes" element={<Notes/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
