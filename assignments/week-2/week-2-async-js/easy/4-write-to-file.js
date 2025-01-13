let fs = require('fs');

// fs.writeFile('assignments/week-2/week-2-async-js/easy/sample.txt', "I am writing this file", function(err){
//     console.log('File Write is completed');
    
// })

fs.appendFile('assignments/week-2/week-2-async-js/easy/sample.txt', "\nI am appending string this file", function(err){
    console.log('File append is completed');
    
})