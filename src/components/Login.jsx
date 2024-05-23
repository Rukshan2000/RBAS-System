// src/components/Login.jsx
import React, { useState } from 'react';
import { users } from '../data';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      onLogin(user);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mb-4 text-xl font-bold">Login</h2>
      <div className="w-80"> {/* Set fixed width */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded"
        >
          Login
        </button>
      </div>
      {error && <p className="mt-4 text-red-500">{error}</p>} {/* Display error below the form */}
    </div>
  );
};

export default Login;
