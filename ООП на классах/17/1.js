class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
	  }
	  setAge(age){
	    this.#age = age;
	  }
	  setSalary(salary) {
		  this.#salary = salary;
	  }
	  
	  getName() {
		  return this.#name;
	  }
	  getAge(){
	    return this.#age;
	  }
	  getSalary() {
		  return this.#salary;
	  }
  }

let employee = new Employee;
employee.setName('John');
employee.setAge(23);
employee.setSalary(43000)

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());