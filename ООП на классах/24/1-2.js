class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('John', 4500),
  new Employee('Bob', 2700),
  new Employee('Mary', 3200),
  new Employee('Liam', 6400)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}