// src/data.js
export const users = [
    { userID: 1, username: 'Alice', password: 'password1' },
    { userID: 2, username: 'Bob', password: 'password2' },
    { userID: 3, username: 'Kamal', password: 'password3' }, // Add Kamal

  ];
  
  export const roles = [
    { roleID: 1, roleName: 'Admin' },
    { roleID: 2, roleName: 'User' },
    { roleID: 3, roleName: 'PermissionManager' } // Add new role for Kamal
  ];
  
  export const permissions = [
    { permissionID: 1, permissionType: 'Read' },
    { permissionID: 2, permissionType: 'Write' },
    { permissionID: 3, permissionType: 'Delete' }
  ];
  
  export const userRoles = [
    { userRoleID: 1, userID: 1, roleID: 1 }, // Alice is Admin
    { userRoleID: 2, userID: 2, roleID: 2 }, // Bob is User
    { userRoleID: 3, userID: 3, roleID: 3 }  // Kamal is PermissionManager
  ];
  
  export const rolePermissions = [
    { rolePermissionID: 1, roleID: 1, permissionID: 1 }, // Admin can Read
    { rolePermissionID: 2, roleID: 1, permissionID: 2 }, // Admin can Write
    { rolePermissionID: 3, roleID: 1, permissionID: 3 }, // Admin can Delete
    { rolePermissionID: 4, roleID: 2, permissionID: 1 }, // User can Read
    { rolePermissionID: 5, roleID: 3, permissionID: 1 }, // PermissionManager can Read
    { rolePermissionID: 6, roleID: 3, permissionID: 2 }  // PermissionManager can Write (Manage Permissions)
  ];
  
  export const tablePermissions = [
    { tableID: 1, userID: 1 }, // Alice has access to Table 1
    { tableID: 2, userID: 1 }, // Alice has access to Table 2
    { tableID: 3, userID: 1 }, // Alice has access to Table 3
    { tableID: 1, userID: 2 }  // Bob has access to Table 1
  ];
  
  export const tableData = {
    1: [
      { id: 1, name: 'Item 1 from Table 1' },
      { id: 2, name: 'Item 2 from Table 1' }
    ],
    2: [
      { id: 1, name: 'Item 1 from Table 2' },
      { id: 2, name: 'Item 2 from Table 2' }
    ],
    3: [
      { id: 1, name: 'Item 1 from Table 3' },
      { id: 2, name: 'Item 2 from Table 3' }
    ]
  };
  