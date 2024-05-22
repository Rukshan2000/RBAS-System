// src/components/RolePermissions.jsx
import React from 'react';
import { getPermissionsForRole } from '../utils';

const RolePermissions = ({ roleID }) => {
  const permissions = getPermissionsForRole(roleID);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Permissions for Role</h2>
      <ul>
        {permissions.map(permission => (
          <li key={permission.permissionID}>{permission.permissionType}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolePermissions;
