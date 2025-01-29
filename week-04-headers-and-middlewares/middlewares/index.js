const express = require('express')

let app = express();



function logRequest(req, res, next){
    console.log('Request made to: ' + req.url);
    next();
}

app.get('/special', logRequest, (req, res) => {
    res.send('This route uses route-specific middleware!');
})

app.use(function(req, res, next) {
    res.json({
        'message': 'you are not allowed.'
    })
})

app.get("/sum", function(req, res) {
    console.log(req.name);
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);