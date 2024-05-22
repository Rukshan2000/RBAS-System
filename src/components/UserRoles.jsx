// src/components/UserRoles.jsx
import React from 'react';
import { getRolesForUser } from '../utils';

const UserRoles = ({ userID }) => {
  const roles = getRolesForUser(userID);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Roles for User</h2>
      <ul>
        {roles.map(role => (
          <li key={role.roleID}>{role.roleName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserRoles;
