// src/components/Component1.jsx
import React from 'react';
import DataTable from './DataTable';
import { tableData, tablePermissions } from '../data';
import { userHasTableAccess } from '../utils';

const Component1 = ({ currentUser }) => {
  const accessibleTables = tablePermissions
    .filter(tp => tp.userID === currentUser?.userID)
    .map(tp => tp.tableID);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Component 1 - Data Tables</h2>
      {accessibleTables.map(tableID => (
        <DataTable
          key={tableID}
          currentUser={currentUser}
          data={tableData[tableID]}
          tableID={tableID}
        />
      ))}
    </div>
  );
};

export default Component1;
