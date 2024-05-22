// src/utils.js
import { userRoles, roles, rolePermissions, permissions, tablePermissions } from './data';

export function getRolesForUser(userID) {
  return userRoles
    .filter(userRole => userRole.userID === userID)
    .map(userRole => roles.find(role => role.roleID === userRole.roleID));
}

export function getPermissionsForRole(roleID) {
  return rolePermissions
    .filter(rolePermission => rolePermission.roleID === roleID)
    .map(rolePermission => permissions.find(permission => permission.permissionID === rolePermission.permissionID));
}

export function userHasPermission(userID, permissionType) {
  const userRoles = getRolesForUser(userID);
  for (let role of userRoles) {
    const rolePermissions = getPermissionsForRole(role.roleID);
    if (rolePermissions.some(permission => permission.permissionType === permissionType)) {
      return true;
    }
  }
  return false;
}

export function userHasTableAccess(userID, tableID) {
  return tablePermissions.some(tp => tp.userID === userID && tp.tableID === tableID);
}
