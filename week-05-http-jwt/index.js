const express = require('express');

const app = express();

app.use(express.json())

let users = [];

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (users.findIndex(u => u.username === username) != -1) {
        res.json({message:'user is already exists'})
        return
    }

    users.push({username:username, password:password})

    console.log(users);

    res.json({message:'User created successfully.'})
})
app.post('/signin', (req, res) => {})

app.listen(3000);