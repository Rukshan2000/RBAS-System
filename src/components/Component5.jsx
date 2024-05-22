// src/components/Component5.jsx
import React, { useState } from 'react';
import { userRoles, roles, rolePermissions, permissions, tablePermissions, users } from '../data';

const Component5 = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPermissions, setUserPermissions] = useState({
    viewComponent3: false,
    read: false,
    write: false,
    delete: false
  });

  const handleUserChange = (event) => {
    const userID = parseInt(event.target.value);
    setSelectedUser(userID);
    // Initialize user permissions based on current permissions
    const hasViewComponent3 = tablePermissions.some(tp => tp.userID === userID && tp.tableID === 3);
    const rolesForUser = userRoles.filter(ur => ur.userID === userID).map(ur => ur.roleID);
    const userHasPermission = (permissionType) => rolesForUser.some(roleID =>
      rolePermissions.some(rp => rp.roleID === roleID && permissions.find(p => p.permissionID === rp.permissionID).permissionType === permissionType)
    );
    setUserPermissions({
      viewComponent3: hasViewComponent3,
      read: userHasPermission('Read'),
      write: userHasPermission('Write'),
      delete: userHasPermission('Delete')
    });
  };

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setUserPermissions({ ...userPermissions, [name]: checked });
  };

  const savePermissions = () => {
    // Update table permissions
    if (userPermissions.viewComponent3) {
      if (!tablePermissions.some(tp => tp.userID === selectedUser && tp.tableID === 3)) {
        tablePermissions.push({ tableID: 3, userID: selectedUser });
      }
    } else {
      const index = tablePermissions.findIndex(tp => tp.userID === selectedUser && tp.tableID === 3);
      if (index > -1) {
        tablePermissions.splice(index, 1);
      }
    }

    // Update role permissions (mock implementation)
    const roleID = userRoles.find(ur => ur.userID === selectedUser).roleID;
    const updatePermission = (permissionType, add) => {
      const permission = permissions.find(p => p.permissionType === permissionType);
      const index = rolePermissions.findIndex(rp => rp.roleID === roleID && rp.permissionID === permission.permissionID);
      if (add && index === -1) {
        rolePermissions.push({ rolePermissionID: rolePermissions.length + 1, roleID, permissionID: permission.permissionID });
      } else if (!add && index > -1) {
        rolePermissions.splice(index, 1);
      }
    };

    updatePermission('Read', userPermissions.read);
    updatePermission('Write', userPermissions.write);
    updatePermission('Delete', userPermissions.delete);

    alert('Permissions updated successfully');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Component 5 - Manage Permissions</h2>
      <div className="mb-4">
        <label className="block mb-2">Select User:</label>
        <select onChange={handleUserChange} className="p-2 border rounded">
          <option value="">--Select User--</option>
          {users.filter(user => user.username !== 'Kamal').map(user => (
            <option key={user.userID} value={user.userID}>{user.username}</option>
          ))}
        </select>
      </div>
      {selectedUser && (
        <div>
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                name="viewComponent3"
                checked={userPermissions.viewComponent3}
                onChange={handlePermissionChange}
              />
              View Component 3
            </label>
          </div>
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                name="read"
                checked={userPermissions.read}
                onChange={handlePermissionChange}
              />
              Read
            </label>
          </div>
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                name="write"
                checked={userPermissions.write}
                onChange={handlePermissionChange}
              />
              Write
            </label>
          </div>
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                name="delete"
                checked={userPermissions.delete}
                onChange={handlePermissionChange}
              />
              Delete
            </label>
          </div>
          <button onClick={savePermissions} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Permissions
          </button>
        </div>
      )}
    </div>
  );
};

export default Component5;
