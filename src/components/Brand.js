import React, { useState } from 'react';

function Brand() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send signup data to backend or handle it here
  }

  const styles = `
    .brand-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 4px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 8rem;
      margin-bottom: 1rem;
    }

    label {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 1.2rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: none;
    }

    button {
      font-size: 1.2rem;
      padding: 0.5rem 1.5rem;
      background-color: #0077ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      box-shadow: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #0066cc;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <form onSubmit={handleSubmit} className="brand-form">
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
          <label htmlFor="password">Password</label>
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

export default Brand;