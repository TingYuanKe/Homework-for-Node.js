// Your Javascript Code Goes Here\
var address={
	Street:`Main`,
	Number:32,
	Apartment:{
		Floor:3,
		Number:24
	}
};

var person={
	firstname:`TingYuan`,
	lastname:`Ke`,
	greet:function(){
		console.log(`Hello,${this.firstname} ${this.lastname}`);
	}
};
person.greet();

console.log(person['firstname']);

