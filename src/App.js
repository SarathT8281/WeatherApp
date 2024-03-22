import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Signup from './Components/Login-Signup/Signup';
import Login from './Components/Login-Signup/Login';


function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
