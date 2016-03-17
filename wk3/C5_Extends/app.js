	'use strict'

class Person {
	constructor (name) {
		this.name = name;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}
}

class Employee extends Person {
	constructor (name, job) {
		super(name);
		this.job = job
	}
	printGreeting () {
		super.printGreeting();
		console.log(`Hi, I am ${this.name} and I am a ${this.job}!`);
	}
}

var person1 = new Employee('TingYuan', 'Student');
person1.printGreeting();

var person2 = new Person('Nudo');
person2.printGreeting();
