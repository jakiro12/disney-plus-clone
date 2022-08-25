import Login from "./components/Login";
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import ContentDetails from "./components/contentDetails";
import "./App.css"
import React from "react";
function App() {

  return (
  
  <BrowserRouter>   
    <Header />  
      <Routes>
      <Route path="/" element={<Navigate to='/login'/>}/>
        <Route path="/login" element={<Login/>} />      
        <Route path="/details" element={<ContentDetails/>} />
        <Route path="/home" element={<Home/>} />
      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
