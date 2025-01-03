// Variables are the containers that hold the values memory address
// It really usefull for resusability purpose, you dont need to write values everytime

// var, let, const

let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped

// Nowadays we are not using the var
// only let and const

// assignment 1
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favColor = "Red";
const HEIGHT = "170cm";
let doYouLikePizza = true;

console.log(favColor, HEIGHT, doYouLikePizza);

// Data types
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

// operators

let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

// functions
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"


// Assignment 2
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sumOfNumbers(a, b){
    return a + b;
}

let firstSum = sumOfNumbers(10, 10);
let secondSum  = sumOfNumbers(30, 25);

// Assignment 3 
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
    return age > 18 ? "Yes": "No"; // Its an ternary operator;
}

let firstPerson = canVote(20);
let secondPerson = canVote(17);


// If / Else
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Assignment 4
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let randomNumber = 20;

if (randomNumber % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');    
}

// Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

// Assignment 5
// Write a function called sum that finds the sum from 1 to a number

function sumOfNNaturalNumbers(n) {
    let calculation = 0;
    for (let i=0; i <= n; i++ ) {
        calculation += i;
    }

    return calculation;
}

let result = sumOfNNaturalNumbers(10);

console.log(result);


// Objects

let user = {
	name: "Harkirat",
	age: 19
}

console.log("Harkirats age is " + user.age);

// Assignment 6
// Write a function that takes a user as an input and greets them with their name and age

function objectGreet(user) {
    console.log(`Good Morning ${user.name}, ${user.name} age is ${user.age}`);
}

objectGreet({name: "ashwin", age: 30});

// assignment 7

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetWithGender(user) {
    console.log(`Good Morning ${user.name}, ${user.name} age is ${user.age} and his/her gender is ${user.gender}`);
}

greetWithGender({name: "ashwin", age: 30, gender: 'male'});

// Assignment 8
// Also tell the user if they are legal to vote or not

function isUserCanVote(user) {
    console.log(`Good Morning ${user.name}, ${user.name} age is ${user.age} and his/her gender is ${user.gender} and ${age > 10 ? 'He/She can Vote' : 'He/She cannot Vote'}`);
}

isUserCanVote({name: "ashwin", age: 30, gender: 'male'});

// Arrays

const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

// Assignment 9
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function evenNumbers(arrayOfNumbers) {
    newArray = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0){
            newArray.push(arrayOfNumbers[i]);
        }
    }

    return newArray;
}

function isEven(number) {
    return number % 2 == 0;
}

// Using filters
numbers = [1,2,3,4,5,6,7,8,9,10];
result = numbers.filter(isEven)

console.log(result);


// Array of Objects

// users = [{
//     name: "Harkirat",
//     age: 21
// }, {
//     name: "raman",
//     age: 22
// }
// ]

// const user1 = users[0] 
// const user1Age = users[0].age


// Assignment 10 
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function returnUserObject(userObject) {
    let newArray = [];
    for (let i=0; i < userObject.length; i++) {
        if (userObject[i].age > 18) {
            newArray.push(userObject[i]);
        }
    }

    return newArray;
}

let userObjects = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
},
{
    name: "ashwin",
    age: 17
},
]

result = returnUserObject(userObjects)

console.log(result);


// Object of Objects
const user1 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;

// Assignment 11
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


function returnMaleUser(user) {
    return user.age > 18 && user.gender === 'male';
}


userObjects = [{
    name: "Harkirat",
    age: 21,
    gender: 'male'
}, {
    name: "raman",
    age: 22,
    gender: 'male'
},
{
    name: "ashwin",
    age: 17,
    gender: 'male'
},
]

console.log(userObjects.filter(returnMaleUser));
