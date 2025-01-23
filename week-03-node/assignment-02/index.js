/*
Cli-Based ToDo Application
1. add todo
2. update todo
3. delete todo
4. done todo
5. show all todo
*/

const { Command } = require('commander');
const fs = require('fs');

let program = new Command

program
    .name('Cli Todo')
    .description('This is a cli based to that you can perform following actions: \n 1. Add ToDo \n 2. Update ToDo \n 3. Delete ToDo \n 4. Done ToDo')
    .version('0.8.0');

program.command('add')
    .description('Take an todo')
    .argument('<todo>', 'Pass a ToDo string')
    .action((todo)=>{
        let content = fs.readFileSync('todos.json', 'utf-8');
        // prepare the object
        let todoObject = {
            id: JSON.parse(content).length + 1,
            todo: todo.trim(),
            is_done: false
        }
        
        content = JSON.parse(content);
        content.push(todoObject);
        fs.writeFileSync('todos.json', JSON.stringify(content));
    });

program.command('update')
    .description('Take a existing todo and new todo')
    .argument('<prevTodo>', 'Pass a previous existing ToDo')
    .argument('<newTodo>', 'Pass a new ToDo')
    .action((prevTodo, newTodo)=>{
        let content = fs.readFileSync('todos.json', 'utf-8');
        content = JSON.parse(content);

        let existTodo = content.find((x)=>{
            return x.todo === prevTodo
        });

        existTodo.todo = newTodo;
        fs.writeFileSync('todos.json', JSON.stringify(content));
    });

program.command('delete')
    .description('Take a todo and delete that particular todo from file')
    .argument('<todo>', 'pass a todo for deleting todo')
    .action((todo)=>{
        let content = fs.readFileSync('todos.json', 'utf-8');
        content = JSON.parse(content);

        let filteredArray = content.filter((x)=>{
            return x.todo !== todo;
        })

        fs.writeFileSync('todos.json', JSON.stringify(filteredArray));
    })

program.parse();