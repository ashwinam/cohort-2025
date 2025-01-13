let fs = require('fs');

fs.readFile('assignments/week-2/week-2-async-js/medium/sample.txt', 'utf-8', function(err, data){
    if (err){
        console.log(err);
    } else {
        cleanedData = data.split(" ").filter(function(e){
            if(e){
                return e
            }
        });
        fs.writeFile('assignments/week-2/week-2-async-js/medium/sample.txt', cleanedData.join(" "), function(err){
            if (err){
                console.log(err);
            }
            else {
                console.log('File is cleaned!');
            }
        })
    }
})

