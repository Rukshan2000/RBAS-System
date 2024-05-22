// src/components/CheckPermission.jsx
import React, { useState } from 'react';
import { userHasPermission } from '../utils';

const CheckPermission = ({ userID }) => {
  const [permission, setPermission] = useState('');
  const [hasPermission, setHasPermission] = useState(null);

  const checkPermission = () => {
    const result = userHasPermission(userID, permission);
    setHasPermission(result);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Check Permission</h2>
      <input
        type="text"
        placeholder="Permission type"
        value={permission}
        onChange={(e) => setPermission(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={checkPermission}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Check
      </button>
      {hasPermission !== null && (
        <p className="mt-2">
          {hasPermission ? 'Permission Granted' : 'Permission Denied'}
        </p>
      )}
    </div>
  );
};

export default CheckPermission;
