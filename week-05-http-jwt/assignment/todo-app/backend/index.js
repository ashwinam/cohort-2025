/*
ToDo Backend:
1. DBs are the filebased where we are storing the user details and todos
    i. create db folder and inside add two json files 
        1. users
        2. todos
2. Create a signup and signin handlers
3. In signin handler add a JWT token functionality.
4. ToDos Crud functionality based on users
5. Add Mark then as done functionality todos
*/

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();

app.use(express.json());

// User Authentication system
app.post('/signup', (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;

    // first read the DB
    let usersData = fs.readFileSync(__dirname + '/DB/users.json');

    let userContent = JSON.parse(usersData);

    // checks on existing username
    let foundUser = userContent.findIndex(u => u.username === username);

    if (foundUser != -1){
        res.json({
            message: 'User is already exists.'
        })
        return
    }

    let user = {
        username: username,
        password: password
    }

    userContent.push(user)

    fs.writeFileSync(__dirname + '/DB/users.json', JSON.stringify(userContent))

    res.json({
        message: 'User created successfully.'
    })
})


app.listen(3000);