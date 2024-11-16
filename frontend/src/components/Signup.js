// src/components/Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/signup', { name, email, password });
      alert(response.data.message);
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form bg-red-900 text-white">
        <h2 className='uppercase font-bold'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='text-red-900'
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-red-900'
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-red-900'
            required
          />
          <button type="submit" className='text-red-900 bg-slate-200'>Sign In</button>
        </form>
<br />
          <div className='font-bold text-xl'>OR</div>< br />
          <Link to="/login" className='text-lg '> Login </Link>
      </div>
    </div>
  );
};

export default Signup;
