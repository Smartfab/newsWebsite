// String, Numbers, null, Boolean, undefined

const name = "john";
const age = 60;

// concatenation
console.log("My name is " + name + " and I am " + age);
//Template String
console.log(`My name is ${name} and i am ${age}`);
console.log(
	"Peter said he met " + name + " who was about " + age + " years old"
);

const hello = `George said he met ${name} who was about ${age} years old`;
const s = "hello world!";

console.log(s.length);

console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));
const t = "technology, business, politics, education, entertainment";
console.log(t.split(", "));

// Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);
console.log(fruits[2]);
fruits[5] = "eggs";
console.log(fruits);
fruits.unshift("strawberries");
console.log(fruits);
fruits.push("almond");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray("hello"));

const person = {
	firstName: "David",
	lastName: "Peterson",
	age: 25,
	hobbies: ["music", "sports", "movies"],
	address: {
		street: "72, Interenational srteet",
		city: "Ibadan",
		Country: "Nigeria",
	},
};

console.log(person);
// alert(person); - not a write way to do it in this case
console.log(person.firstName);
console.log(
	person.firstName,
	person.lastName,
	person.hobbies[2],
	person.address.street
);
const {
	firstName,
	lastName,
	address: { city },
} = person;
console.log(firstName);
console.log(city);
person.email = "davidpeterson@gmail.com";
console.log(person);

const todos = [
	{
		id: 1,
		text: "Take out trash",
		isCompleted: true,
	},
	{
		id: 2,
		text: "Meeting with the boss",
		isCompleted: true,
	},
	{
		id: 3,
		text: "Dentist Appointment",
		isCompleted: false,
	},
];
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for (let i = 0; i < 10; i++) {
	console.log(i);
}
//for loops
for (let i = 0; i < 10; i++) {
	console.log(`For Loop Number:${i}`);
}

//while loops
let i = 0;
while (i < 10) {
	console.log(`While Loop Number:${i}`);
	i++;
}
for (let i = 0; i < todos.length; i++) {
	console.log(`For Loop Number:${i}`);
}

for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

for (let todo of todos) {
	console.log(todo);
	console.log(todo.text);
}

//forEach
todos.forEach(function (todo) {
	console.log(todo.text);
});

//map
const todoText = todos.map(function (todo) {
	return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter(function (todo) {
	return todo.isCompleted === true;
});

console.log(todoCompleted);

// const todoCompleted = todos
// 	.filter(function (todo) {
// 		return todo.isCompleted === true;
// 	})
// 	.map(function (todo) {
// 		return todo.text;
// 	});
// console.log(todoCompleted);

// const x = 10;

// if (x === 10) {
// 	console.log("x is definitely 10");
// } else if (x > 15) {
// 	console.log("x is greater than 10");
// } else {
// 	console.log("x is less than 10");
// }

// const x = 7;
// const y = 9;

// if (x > 8 || y > 6) {
// 	console.log("x is more than 8 or y is more than 9");
// }

const x = 15;
const y = 9;

if (x > 8 && y > 6) {
	console.log("x is more than 8 or y is more than 9");
}

const a = 20075;
const color = a > 8 ? "stop" : "continue";

switch (color) {
	case "stop":
		console.log("the operation can stop");
		break;
	case "continue":
		console.log("the operation can continue");
		break;
	default:
		console.log("seek for authorization");
		break;
}

// function addNums(num1, num2) {
// 	console.log(num1 + num2);
// }
// addNums(9, 3);

// function addNums(num1 = 2, num2 = 3) {
// 	console.log(num1 + num2);
// }

// addNums();

// function addNums(num1 = 2, num2 = 3) {
// 	console.log(num1 + num2);
// }

// addNums(6, 9);

// function addNums(num1 = 5, num2 = 19) {
// 	return num1 + num2;
// }

// console.log(addNums(8, 19));

/*
const addNums = (num1 = 5, num2 = 19) => num1 + num2;

console.log(addNums(8, 19)) ;*/

/* It won't even work if we try to return
const addNums = (num1 = 5, num2 = 19) => return num1 + num2;

console.log(addNums(8, 19)) ;*/

/*const addNums = (num1 = 5, num2 = 19) => console.log(num1 + num2);

addNums(8, 19);*/

/*const addNums = (num1) => num1 + 5;

console.log(addNums(5));*/

/*we can use this with forEach array and other array types*/
todos.forEach((todo) => console.log(todo));

//constructor function
// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = new Date(dob);
// 	// this.getBirthYear = function () {
// 	// 	return this.dob.getFullYear();
// 	// };
// 	// this.getFullName = function () {
// 	// 	return `${this.firstName} ${this.lastName}`;
// 	// };
// }

//Instantiate object
// const person1 = new Person("John", "Davidson", "8-4-1980");
// const person2 = new Person("Alacur", "Brad", "9-1-1976");

// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());

// console.log(person2.getFullName());
// console.log(person2);
// Prototype becomes a better way to remove functions from objects
// Person.prototype.getBirthYear = function () {
// 	return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function () {
// 	return `${this.firstName} ${this.lastName}`;
// };
// console.log(person1);
/*
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear() {
		return this.dob.getFullYear();
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}*/
/*
const person1 = new Person("John", "Davidson", "8-4-1980");
const person2 = new Person("Alacur", "Brad", "9-1-1976");

console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());

console.log(person1.getFullName());
console.log(person2);*/

/*function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.getFullName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
	this.getBirthYear = function () {
		return this.dob.getFullYear();
	};
}

const person1 = new Person("David", "Brad", "6-9-2002");
console.log(person1);

console.log(person1.dob.getFullYear());
console.log(person1.getFullName());
console.log(person1);*/

/*function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	Person.prototype.getFullName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
	Person.prototype.getBirthYear = function () {
		return this.dob.getFullYear();
	};
}

const person1 = new Person("David", "Brad", "6-9-2002");
console.log(person1);*/

/*class Person {
	constructor(firstName, lastName, dob, university, address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
		this.university = university;
		this.address = address;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	getBirthYear() {
		return this.dob.getFullYear();
	}
}
const person1 = new Person(
	"David",
	"Brad",
	"6-9-2002",
	"Harvard University",
	"7, Lord Hamilton Street"
);
console.log(person1);
console.log(person1.getBirthYear());*/
