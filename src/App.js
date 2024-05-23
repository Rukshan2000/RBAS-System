// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="flex">
        {currentUser && <Sidebar currentUser={currentUser} />}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold my-4">RBAC_ Management</h1>
          {!currentUser ? (
            <Login onLogin={handleLogin} />
          ) : (
            <div className="w-full max-w-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl">Welcome, {currentUser.username}</h2>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </div>
              <Routes>
                <Route path="/component1" element={<Component1 currentUser={currentUser} />} />
                <Route path="/component2" element={<Component2 currentUser={currentUser} />} />
                <Route path="/component3" element={<Component3 />} />
                <Route path="/component4" element={<Component4 />} />
                {currentUser.username === 'Kamal' && (
                  <Route path="/component5" element={<Component5 />} />
                )}
              </Routes>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
