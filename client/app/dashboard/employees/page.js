"use client"

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Filters } from "./components/filters";
import { AddEmployeeDialog } from "./components/addEmployeeDialog";
import { EmployeeTable } from "./components/employeeTable";
import { useEffect, useState } from "react";
import { getEmployees, saveEmployees } from "@/app/utils/localStorageUtils";

const mockEmployees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Engineering", status: "Active", avatar: "/placeholder-user.jpg" },
  { id: 2, name: "Jane Smith", position: "Marketing Manager", department: "Marketing", status: "Active", avatar: "/placeholder-user.jpg" },
  { id: 3, name: "Michael Brown", position: "Sales Representative", department: "Sales", status: "Active", avatar: "/placeholder-user.jpg" },
  { id: 4, name: "Emily Davis", position: "HR Specialist", department: "Human Resources", status: "Active", avatar: "/placeholder-user.jpg" },
];


export default function EmployeesManagement() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    if (!getEmployees().length) {
      saveEmployees(mockEmployees);
    }

    setEmployees(getEmployees());
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="text-xl font-bold" href="#">
            Employee Management
          </Link>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Input
              className="bg-white dark:bg-gray-950 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 w-64"
              placeholder="Search employees..."
              type="search"
            />
            <Filters />
          </div>
          <AddEmployeeDialog onAdd={() => setEmployees(getEmployees())}/>
        </div>
        <EmployeeTable employees={employees} onDelete={() => setEmployees(getEmployees())}/>
      </main>
    </div>
  );
}
