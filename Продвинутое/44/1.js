class Employee {
	constructor(salary) {
		this.salary = salary;
	}
	GetSalary() {
		return this.salary + '$';
	}
}

let employee = new Employee(1300);
console.log(employee.GetSalary());