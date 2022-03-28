
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import {Products} from './Components/Products'
import {Login} from './Components/Login'
import {Register} from './Components/Register'



function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path = "/products" element = {<Products />} />
       <Route path = "/Login" element = {<Login />} />
       <Route path = "/Register" element = {<Register />} />
       <Route />

     </Routes>
    </div>
  );
}

export default App;
