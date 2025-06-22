class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

const sergio = new Person('Sergio', 55, 'male', 'sergio@gmail.com');
console.log(sergio.getDetails());

class Employee extends Person {
  constructor(salary, department, name, age, gender, email) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      ...this.getDetails(),
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee = new Employee(
  5000,
  'developer',
  'Bob',
  35,
  'male',
  'bob@gmail.com'
);

console.log(employee.getEmployeeDetails());
