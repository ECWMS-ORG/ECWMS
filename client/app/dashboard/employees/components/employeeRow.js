// components/EmployeeRow.js

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, FilePlus, Trash2 } from "lucide-react";
import { UserAvatar } from "./avatar";
import { deleteEmployee } from "@/app/utils/localStorageUtils";

export const EmployeeRow = ({ employee, onDelete }) => {
  const handleDelete = () => {
    deleteEmployee(employee.id);
    onDelete();
  };

  return (
    <tr className="border-b dark:border-gray-800">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <UserAvatar name={employee.name} src={employee.avatar} />
          <div>
            <div className="font-medium">{employee.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{employee.position}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">{employee.position}</td>
      <td className="px-6 py-4">{employee.department}</td>
      <td className="px-6 py-4">
        <Badge variant="success">{employee.status}</Badge>
      </td>
      <td className="px-6 py-4 text-right">
        <Button size="icon" variant="ghost">
          <Eye className="w-5 h-5" />
          <span className="sr-only">View</span>
        </Button>
        <Button size="icon" variant="ghost">
          <FilePlus className="w-5 h-5" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button size="icon" variant="ghost" onClick={handleDelete}>
          <Trash2 className="w-5 h-5" />
          <span className="sr-only">Delete</span>
        </Button>
      </td>
    </tr>
  );
};
