const express = require('express');

let app = express()

app.get('/multiply', (req, res) => {
    let firstNum = parseInt(req.query.a);
    let secondNum = parseInt(req.query.b);

    res.status(200);
    res.json({
        'msg': 'Operation is successfull', 'result': firstNum * secondNum
    })
})

app.get('/add', (req, res) => {
    let firstNum = parseInt(req.query.a);
    let secondNum = parseInt(req.query.b);

    res.status(200);
    res.json({
        'msg': 'Operation is successfull', 'result': firstNum + secondNum
    })
})

app.get('/divide', (req, res) => {
    let firstNum = parseInt(req.query.a);
    let secondNum = parseInt(req.query.b);

    res.status(200);
    res.json({
        'msg': 'Operation is successfull', 'result': firstNum / secondNum
    })
})

app.get('/subtract', (req, res) => {
    let firstNum = parseInt(req.query.a);
    let secondNum = parseInt(req.query.b);

    res.status(200);
    res.json({
        'msg': 'Operation is successfull', 'result': firstNum - secondNum
    })
})

app.listen(3000);