// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ currentUser }) => {
  const isAdmin = currentUser.username === 'Alice';
  const isUser = currentUser.username === 'Bob';
  const isPermissionManager = currentUser.username === 'Kamal';

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <Link to="/component1" className="text-white hover:text-gray-400">Component 1</Link>
        </li>
        <li className="mb-2">
          <Link to="/component2" className="text-white hover:text-gray-400">Component 2</Link>
        </li>
        {isAdmin && (
          <>
            <li className="mb-2">
              <Link to="/component3" className="text-white hover:text-gray-400">Component 3</Link>
            </li>
            <li className="mb-2">
              <Link to="/component4" className="text-white hover:text-gray-400">Component 4</Link>
            </li>
          </>
        )}
        {isPermissionManager && (
          <li className="mb-2">
            <Link to="/component5" className="text-white hover:text-gray-400">Component 5</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
