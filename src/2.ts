/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  public name: string;          // Public property accessible everywhere
  private department: string;   // Private property accessible only within Employee
  protected salary: number;      // Protected property accessible within Employee and subclasses

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000); // Call to super constructor with increased salary
  }
}
  
// Testing
const employee = new Employee("John Doe", "Sales", 50000);
console.log(employee.getEmployeeDetails()); // Name: John Doe, Department: Sales, Salary: 50000

const manager = new Manager("Jane Smith", "Sales", 50000);
console.log(manager.getEmployeeDetails()); // Name: Jane Smith, Department: Sales, Salary: 60000

export { };