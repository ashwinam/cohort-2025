// Write a function that takes a two args and return sum

// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(10, 20));

// // find sum of n natural numbers

// function sumNaturalNumber(n) {
//     // return (n * (n + 1)) / 2; // Mathematical ans
//     // programaticaly ans
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumNaturalNumber(100));


// const fs = require('fs');

// let files = ['a.txt', 'b.txt']

// for(let i=0; i < files.length; i++){
//     let content = fs.readFileSync(`./week-01-async-js/${files[i]}`, 'utf-8');
//     console.log(content);
// }


// Lets Run the asynchrounous readFile
const fs = require('fs');

fs.readFile('./week-01-async-js/a.txt', 'utf-8', function (err, data){
    console.log(data);
})

console.log('Ill be logging first');


// Functional argument
// In we can pass the function as a argument to the another function


function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function division(a, b){
    return a / b;
}

function multiplication(a, b){
    return a * b;
}

function doOperation(a, b, op){
    console.log(op(a,b));
}

doOperation(10, 20, multiplication)

