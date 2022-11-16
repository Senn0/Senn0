class Employee {
    age;
    name;
    salary;
}

let employee1 = new Employee;
let employee2 = new Employee;
let employee3 = new Employee;
let sum = 0;

employee1.age = 41;
employee1.name = 'Kale';
employee1.salary = 25000;

employee2.age = 37;
employee2.name = 'Alice';
employee2.salary = 32000;

employee3.age = 22;
employee3.name = 'Bob';
employee3.salary = 18000;

sum += employee1.salary + employee2.salary + employee3.salary;

console.log(sum);