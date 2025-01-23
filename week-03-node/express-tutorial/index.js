const express = require('express');

let app = express();

function sum(n){
    return (n * (n + 1))/ 2;
}

app.get('/', function(req, res){
    let n = req.query.n;
    
    let ans = sum(parseInt(n));
    
    res.send('Your Anser is : ' + ans.toString());
})

app.listen(3000);

