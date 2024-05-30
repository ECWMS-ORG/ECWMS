// components/EmployeeTable.js

import { EmployeeRow } from "./employeeRow";

export const EmployeeTable = ({ employees, onDelete }) => (
  <div className="border rounded-lg shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="font-medium">Employees</div>
    </div>
    <div className="overflow-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-4 text-left font-medium">Name</th>
            <th className="px-6 py-4 text-left font-medium">Position</th>
            <th className="px-6 py-4 text-left font-medium">Department</th>
            <th className="px-6 py-4 text-left font-medium">Status</th>
            <th className="px-6 py-4 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow key={employee.id} employee={employee} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
