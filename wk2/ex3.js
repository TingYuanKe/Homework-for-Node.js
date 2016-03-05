var greetMe = function() {
	console.log(`Hi TingYuan`);
}
greetMe();

//arrow function
greetSam = () => console.log(`Hi Sam`);
greetSam();
greetYou = (name) => console.log('Hi ' + name + `!`);
greetYou('NTUE');

//----------------------------------

var square1 = function(num) {
	console.log(num * num)
};

var square2 = num => {
	return console.log(num * num)
};

var square3 = num => console.log(num * num)
square1(10);
square2(20);
square3(30);
