export const getEmployees = () => {
    const employees = localStorage.getItem("employees");
    return employees ? JSON.parse(employees) : [];
  };
  
export const saveEmployees = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const addEmployee = (employee) => {
  const employees = getEmployees();
  employees.push(employee);
  saveEmployees(employees);
};

export const updateEmployee = (updatedEmployee) => {
  let employees = getEmployees();
  employees = employees.map(employee =>
    employee.id === updatedEmployee.id ? updatedEmployee : employee
  );
  saveEmployees(employees);
};

export const deleteEmployee = (id) => {
  let employees = getEmployees();
  employees = employees.filter(employee => employee.id !== id);
  saveEmployees(employees);
};
  