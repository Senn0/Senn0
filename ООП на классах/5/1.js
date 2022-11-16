class Employee {
    age;
    name;
    salary;
    check() {
		  return "I'm work" ;
	  }
}

let employee = new Employee;
employee.age = 41;
employee.name = 'Kale';
employee.salary = 25000;

console.log(employee.check());