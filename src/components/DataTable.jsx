// src/components/DataTable.jsx
import React from 'react';
import { userHasPermission } from '../utils';

const DataTable = ({ currentUser, data, tableID }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Data Table {tableID}</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">
                {userHasPermission(currentUser.userID, 'Read') && (
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button>
                )}
                {userHasPermission(currentUser.userID, 'Write') && (
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                )}
                {userHasPermission(currentUser.userID, 'Delete') && (
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
