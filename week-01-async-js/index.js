// Write a function that takes a two args and return sum

function sum(a,b) {
    return a + b;
}

console.log(sum(10, 20));

// find sum of n natural numbers

function sumNaturalNumber(n) {
    // return (n * (n + 1)) / 2; // Mathematical ans
    // programaticaly ans
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNaturalNumber(100));


const fs = require('fs');

let files = ['a.txt', 'b.txt']

for(let i=0; i < files.length; i++){
    let content = fs.readFileSync(`./week-01-async-js/${files[i]}`, 'utf-8');
    console.log(content);
}


