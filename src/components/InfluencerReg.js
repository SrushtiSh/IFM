import React, { useState } from 'react';
import"../components/styles/In.css";

const InfluencerReg= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here
  };

  return (
    <form className='i_form' onSubmit={handleSubmit}>
      <div>
        <label className='i_labels'>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label  className='i_labels'>Set Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn" type="submit">Verify Mail</button>
    </form>
  );
};

export default InfluencerReg;
