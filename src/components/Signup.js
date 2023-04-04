import React from 'react'
import"../components/styles/Signup.css";

import { useNavigate } from "react-router-dom";

function Signup() 
  {
    const navigate = useNavigate();
    const Brands = () => {
     
      navigate('/BrandReg');
    };
    
    const Influencer = () => {
      
      navigate('/InfluencerReg');
    };
    
  return (
    <>
  

    <div className="body">
      
      <button onClick={Brands} className="left btns">
  
      <i class="fa-solid fa-building"></i><i class="fa-solid fa-user-tie"></i><br></br>Brands
      
      </button>
      <button onClick={Influencer} className="right btns"><i class="fa-solid fa-camera"></i><br></br>Influencer</button>
      
     </div>


     </>
    
  )
  }

export default Signup;
