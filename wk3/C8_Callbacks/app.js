function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'DTD NTUE'
	};
	callback(data);
}

greet(data => {
	console.log('The callback was invoked!');
	console.log(data);
});
greet(data => {
	console.log('A different callback was invoked!');
	console.log(data.name);
});

function hello(callback) {
	console.log(`Hello I'm Tingyaun`);
	var data = {
		style: `Locking`,
		number: `110219047`
	};
	callback(data);
}
hello(data => {
	console.log(`Style is:${data.style}`)
});
hello(data => {
	console.log(`number is:${data.number}`)
})
