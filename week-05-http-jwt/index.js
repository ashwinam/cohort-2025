const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json())

let users = [];

// function generateRandomToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i=0; i<32; i++){
//         token += options[Math.floor(Math.random() * options.length)]
//     }

//     return token;
// }

const JWT_SECRET = "someRandomSecret";

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


app.post('/signin', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let foundUser = users.find(u => u.username === username && u.password === password)
    console.log(users);
    
    if (foundUser){
        let token = jwt.sign({username: foundUser.username}, JWT_SECRET);
        foundUser.token = token;
        res.json({message: 'user loggedin successfully', token: token})
    } else {
        res.json({message: 'username and password did not match'})
    }
})

app.post('/me', (req, res)=>{
    const token = req.headers.authorization;
    let userDetails = jwt.verify(token, JWT_SECRET);

    console.log(userDetails);
    
    let username = userDetails.username;

    console.log(token);

    let foundUser = users.find(u => u.username === username);

    if (!token){
        res.json({message: 'not authenticated'})
        return
    }
    

    if (foundUser) {
        res.json({username: foundUser.username, password: foundUser.password})
    } else {
        res.json({message: 'user is not authenticated'})
    }
})

app.listen(3000);