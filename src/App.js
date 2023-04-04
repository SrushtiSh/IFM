import "./components/styles/Style.css";
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import BrandReg from "./components/BrandReg";






export default function App() {
  return (
    <div className="App">
      
      
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/signup" element={<Signup/>}/>
                <Route path ="/BrandReg" element={<BrandReg/>}/>
               

            </Routes>
            
       </Router>
       
       
       
     
    </div>
    
  );
}


