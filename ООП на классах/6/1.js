class Employee {
    age;
    name;
    salary;
    check(name, salary) {
		  return name + ', salary: ' + salary;
	  }
}

let employee = new Employee;
employee.age = 41;
employee.name = 'Kale';
employee.salary = 25000;


console.log(employee.check(employee.name, employee.salary));