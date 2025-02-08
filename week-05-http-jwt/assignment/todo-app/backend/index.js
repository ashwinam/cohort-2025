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

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello, World!')
})

app.listen(3000);