const express = require('express');
const fs = require('fs');
let app = express();

const router = express.Router()

/*
Authentication flow for todo app
File Based Authentication system for todo app

1. SignUp: if user signup it create a new object and push it to the file user.json file -> done

2. SignIn: It checks user email address  from the user json file 
if not found throws validation error: No user available with this email, please reverify your email or create new user -> Done

3. CRUD Todos Based on files db system

*/

app.use(express.json()) // used for request body else it return undefined

function checkUserDbFile(req, res, next){
    if (fs.existsSync('./db/users.json')){
        console.log('User File is exists');
    } else {
        fs.writeFileSync('./db/users.json', JSON.stringify([]))
        console.log('File is created');
    }
    next();
}

function checkToDoDbFile(req, res, next){
    if (fs.existsSync('./db/todos.json')){
        console.log('ToDo File is exists');
    } else {
        fs.writeFileSync('./db/todos.json', JSON.stringify([]))
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

app.use(checkUserDbFile);
app.use(checkToDoDbFile);

app.get('/', (req, res) => {
    res.send('Welcome to the ToDoLo.')
})

app.use('/signup', isUserExist);

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
    const email = req.body.email;
    const password = req.body.password;

    let content = fs.readFileSync('./db/users.json', 'utf-8')

    let userList = JSON.parse(content);

    let user = userList.find(x => x.email === email)
    if (user){
        if (user.password === password){
            res.json({'msg':'Logged In successfull...'})
        } else {
            res.json({'msg': 'email and password did not match'})
        }
        
    }else {
        res.json({'msg': 'email and password did not match'})
    }

});

// ToDos Endpoints

app.get('/todos', function(req, res){
    let content = fs.readFileSync('./db/todos.json', 'utf-8');

    let todos = JSON.parse(content);

    res.json(todos);
})

app.post('/todos', function(req, res){
    let content = fs.readFileSync('./db/todos.json', 'utf-8');
    let todos = JSON.parse(content);

    let todo = req.body.todo;

    let todo_object = {
        id: todos.length + 1,
        todo: todo,
        is_complete: false
    };

    todos.push(todo_object);

    fs.writeFileSync('./db/todos.json', todos);

    res.json({
        'msg': 'todo added successfully.',
        todo_object
    })

})

app.delete('/todos/:id', function(req, res){
    let id = req.params.id;
    let content = fs.readFileSync('./db/todos.json', 'utf-8');
    let todos = JSON.parse(content);

    todos = todos.filter(x => x.id !== id);

    fs.writeFileSync('./db/todos.json', todos);

    res.json({'msg': `id ${id} is deleted.`})

})

app.put('/todos/:id', function(req, res){
    let id = req.params.id;
    let todo = req.body.todo;
    let content = fs.readFileSync('./db/todos.json', 'utf-8');
    let todos = JSON.parse(content);

    todo = todos.find(x => x.id === id);

    todo.todo = todo

    fs.writeFileSync('./db/todos.json', todos);

    res.json({'msg': `id ${id} is updated.`})

})

app.listen(3000);