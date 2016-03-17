'use strict'
class Person {
	constructor(name) {
		this.name = name;
	}
	greeting() {
		console.log(`Hi ,I am ${this.name}~`);
	}
}
var person1 = new Person(`TingYuan`);
person1.greeting();

var person2= new Person(`Nudo`);
	person2.greeting();
