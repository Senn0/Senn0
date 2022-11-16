class Employee {
    name;
    salary;
    check() {
		  console.log(this.name);
		  console.log(this.salary);
	  }
}

let employee = new Employee;
employee.name = 'Kale';
employee.salary = 25000;

employee.check();