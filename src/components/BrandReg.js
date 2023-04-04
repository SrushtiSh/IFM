
import React, { useState } from 'react';
import"../components/styles/Brand.css";


function BrandReg() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send signup data to backend or handle it here
  }



  return (
    <>
      
      <form onSubmit={handleSubmit} className="brand-form">
      <div className="form-group">
          <label htmlFor="Name">Your Name</label>
          <input
            type="text"
            id="your_name"
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Brand Name">Brand Name</label>
          <input
            type="text"
            id="brand_name"
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Job Title">Your Job Title</label>
          <input
            type="text"
            id="job_title"
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Brand Category">Brand Category</label>
          <input
            type="text"
            id="brand_category"
            placeholder="Ex.Personal Care"
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="Location"
            
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Phone">Contact Number</label>
          <input
            type="text"
            pattern="[0-9]*"
            id="phone"
            
            
            
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Set Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default BrandReg;
