// Filename: complexCode.js
// Purpose: Sample code demonstrating a complex and sophisticated JavaScript program

/*
 * Employee Management System
 * This program manages employee data, including adding, deleting, and updating employee records.
 * It also provides a variety of helpful functions, such as searching employees by certain criteria.
 * The program uses object-oriented programming principles and follows best practices for modularity and readability.
 */

class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  toString() {
    return `ID: ${this.id}, Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
  }
}

class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  deleteEmployee(id) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id) {
        this.employees.splice(i, 1);
        break;
      }
    }
  }

  updateEmployee(id, updatedEmployee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id) {
        this.employees[i] = updatedEmployee;
        break;
      }
    }
  }

  searchEmployeesByPosition(position) {
    return this.employees.filter(employee => employee.position === position);
  }

  getTotalSalary() {
    let totalSalary = 0;
    for (let i = 0; i < this.employees.length; i++) {
      totalSalary += this.employees[i].salary;
    }
    return totalSalary;
  }
}

// Usage example
const managementSystem = new EmployeeManagementSystem();

const employee1 = new Employee(1, 'John Doe', 'Manager', 5000);
const employee2 = new Employee(2, 'Jane Smith', 'Developer', 4000);
const employee3 = new Employee(3, 'Mike Johnson', 'Designer', 3500);

managementSystem.addEmployee(employee1);
managementSystem.addEmployee(employee2);
managementSystem.addEmployee(employee3);

console.log('Total Salary:', managementSystem.getTotalSalary());

console.log('Employees in Manager position:');
const managers = managementSystem.searchEmployeesByPosition('Manager');
managers.forEach(manager => console.log(manager.toString()));

managementSystem.deleteEmployee(2);
console.log('Employee deleted.');

const updatedEmployee = new Employee(3, 'Mike Johnson', 'Senior Designer', 4500);
managementSystem.updateEmployee(3, updatedEmployee);
console.log('Employee updated.');

console.log('All Employees:');
managementSystem.employees.forEach(employee => console.log(employee.toString()));

/*
 * ... more functions and operations can be added to enhance this code further ...
 */

// End of complexCode.js