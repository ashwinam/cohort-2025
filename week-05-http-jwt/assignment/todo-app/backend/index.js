/*
ToDo Backend:
1. DBs are the filebased where we are storing the user details and todos
    i. create db folder and inside add two json files 
        1. users -> done
        2. todos -> done
2. Create a signup and signin handlers -> done
3. In signin handler add a JWT token functionality. -> done
4. ToDos Crud functionality based on users
5. Add Mark then as done functionality todos
*/

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();

app.use(express.json());

JWT_SECRET = 'dfgndfndfg'

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

app.post('/signin', (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;

    // read the users data
    let usersData = fs.readFileSync(__dirname + '/DB/users.json');

    let userContent = JSON.parse(usersData);

    let foundUser = userContent.find(u => u.username === username);

    if (foundUser){
        let token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET)

        return res.json({
            message: 'Loggedin Successfully',
            token: token
        })
    } else {
        return res.json({
            message: 'email and password did not match'
        })
    }
})

// todos enpoints

// {id, todo, username, is_completed}

app.get('/todos', (req, res)=>{
    let token = req.headers.token;

    if (!token){
        res.status(401)
        return res.json({
            message: 'Please log in first.'
        })
    }

    let userDetail = jwt.verify(token, JWT_SECRET);

    // read the todos DB
    let todoData = fs.readFileSync(__dirname + '/DB/todos.json', 'utf-8');

    let todoContent = JSON.parse(todoData);

    let userToDos = todoContent.filter(u => u.username === userDetail.username)

    res.json({
        todos: userToDos
    })
})


app.listen(3000);