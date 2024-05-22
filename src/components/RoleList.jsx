// src/components/RoleList.jsx
import React from 'react';
import { roles } from '../data';

const RoleList = ({ onSelectRole }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Roles</h2>
      <ul>
        {roles.map(role => (
          <li key={role.roleID}>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => onSelectRole(role.roleID)}
            >
              {role.roleName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
