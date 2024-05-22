// src/components/PermissionList.jsx
import React from 'react';
import { permissions } from '../data';

const PermissionList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Permissions</h2>
      <ul>
        {permissions.map(permission => (
          <li key={permission.permissionID}>{permission.permissionType}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
