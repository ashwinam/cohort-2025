let fs = require('fs');

// Read file in synchronous way
// content = fs.readFileSync('assignments/week-2/week-2-async-js/easy/3-read-from-file.md', 'utf-8')

// console.log(content);

// Async way to read file
content = fs.readFile('assignments/week-2/week-2-async-js/easy/3-read-from-file.md', 'utf-8', function(err, data){
    if (err){
        console.log(err, 'ERROR!');
    } else {
        console.log(data, 'DATA!');
    }
    
})

console.log("Reading From File!");

for(let i = 0; i<100000000; i++){
    console.log(i);
}