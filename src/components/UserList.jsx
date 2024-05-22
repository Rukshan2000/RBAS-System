// src/components/UserList.jsx
import React from 'react';
import { users } from '../data';

const UserList = ({ onSelectUser }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.userID}>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => onSelectUser(user.userID)}
            >
              {user.username}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
