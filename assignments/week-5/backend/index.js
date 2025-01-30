const express = require('express');
const fs = require('fs');
let app = express();

const router = express.Router()

/*
Authentication flow for todo app
File Based Authentication system for todo app

1. SignUp: if user signup it create a new object and push it to the file user.json file

2. SignIn: It checks user email address  from the user json file 
if not found throws validation error: No user available with this email, please reverify your email or create new user
*/

app.use(express.json()) // used for request body else it return undefined

function checkDbFile(req, res, next){
    if (fs.existsSync('./db/users.json')){
        console.log('User File is exists');
    } else {
        fs.writeFileSync('./db/users.json', JSON.stringify([]))
        console.log('File is created');
    }
    next();
}

function isUserExist(req, res, next){
    let content = fs.readFileSync('./db/users.json', 'utf-8');

    let userList = JSON.parse(content)
    let email = req.body.email;
    
    if (userList.findIndex(x => x.email === email) !== -1){
        res.json({'msg': 'User is already exists.'})
        return
    }
    next();
}

app.get('/', (req, res) => {
    res.send('Welcome to the ToDoLo.')
})

app.use(checkDbFile);
app.use(isUserExist);

app.post('/signup', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    let content = fs.readFileSync('./db/users.json', 'utf-8');

    let userList = JSON.parse(content)

    let user = {
        id: userList.length + 1,
        email: email,
        password: password
    }
    userList.push(user)
    fs.writeFile('./db/users.json', JSON.stringify(userList), ()=> {
        console.log('File is updated');
    });

    res.json({
        'msg': 'User added successfully.'
    })
});

app.post('/signin', function(req, res){
    res.send('User Sign in page, loading...')
});

app.listen(3000);