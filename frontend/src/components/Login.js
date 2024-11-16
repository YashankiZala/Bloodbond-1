// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      alert(response.data.message);
      // Redirect to dashboard or home
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form bg-red-900 text-white">
        <h2 className='uppercase font-bold'>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className='text-red-900 bg-slate-200'>Login</button>
        </form>
<br />
          <div className='font-bold text-xl'>OR</div>< br />
          <Link to="/signup" className='text-lg '> Sign Up </Link>
      </div>
    </div>
  );
};

export default Login;
