async function signup(){
    let nodes = document.querySelectorAll('.input-box');
    let username = nodes[0].value;
    let password = nodes[1].value;

    let response = await axios.post('http://localhost:3000/signup', {
            username: username,
            password: password
    })

    alert(response.data.message);
}

async function signin(){
    let nodes = document.querySelectorAll('.input-box');
    let username = nodes[0].value;
    let password = nodes[1].value;

    let response = await axios.post('http://localhost:3000/signin', {
        username: username,
        password: password
    })

    let token = response.data.token;

    localStorage.setItem('token', token);

    alert(response.data.message);
}

function formToggler(element){
    if (element.value === 'signup'){
        document.querySelector('.sign-up').querySelector('h2').innerHTML = 'SignIn'
        let btnEl = document.querySelector('.sign-up-btn')
        btnEl.innerHTML = 'Signin'
        btnEl.setAttribute('onclick', 'signin()')
        document.querySelector('.redirect-link').childNodes[0].nodeValue = 'Create an account ? '
        element.innerHTML = 'Sign Up'
        element.value = 'signin'
    } else {
        document.querySelector('.sign-up').querySelector('h2').innerHTML = 'SignUp';
        let btnEl = document.querySelector('.sign-up-btn')
        btnEl.innerHTML = 'Signup'
        btnEl.setAttribute('onclick', 'signup()')
        document.querySelector('.redirect-link').childNodes[0].nodeValue = 'Alreadt have an account ? '
        element.innerHTML = 'Sign In'
        element.value = 'signup'
    }
}

// condition rendering, How do you want to proceed?
/*
if token is available then render the todos, else render the signup page
*/

function logout(){
    localStorage.removeItem('token');
    alert('Logout successfully.')
}

async function getTodos(){
    let todos = await axios.get('http://localhost:3000/todos', {
        headers: {token: localStorage.getItem('token')}
    });

    return todos.data.todos;
    
}

async function conditionalRendering(){
    let token = localStorage.getItem('token');
    if (token){
        let signUpView = document.querySelector('.sign-up');
        signUpView.style.display = 'none';
        todos = await getTodos();
        
        if (todos.length < 1) {
            document.querySelector('.todo-items').innerHTML = "<p style='color: white; font-size: 18px; font-weight: 500;'>No todos available.</p>"
        } else {
            document.querySelector('.todo-items').innerHTML = ""
            for (let i = 0; i < todos.length; i++){
                let divEl = document.createElement('div');
                divEl.className = 'todo-block';
                divEl.innerHTML = `${i + 1}. ${todos[i].todo}<i class="material-icons edit-icon" onclick="editTodo()">&#xe3c9;</i><i class="material-icons delete-icon" onclick="deleteTodo(this)">delete_forever</i>
                    <i class="material-icons check-icon" onclick="markDoneTodo()">&#xe86c;</i>`;
                divEl.setAttribute('todoId', todos[i].id)
                document.querySelector('.todo-items').appendChild(divEl);
                
            }
        }
    } else {
        let todosView = document.querySelector('.todos-view');
        todosView.style.display = 'none';
    }
}

async function addTodo(){
    let token = localStorage.getItem('token');
    let todo = document.querySelector('.todo-input-box').value;

    let response = await axios.post('http://localhost:3000/todos', {
        todo: todo
    }, {
        headers: {token: token}
    })

    console.log(response);
    
}

async function deleteTodo(element){
    let token = localStorage.getItem('token');
    let todoId = element.parentElement.getAttribute('todoid');

    let response = await axios.delete('http://localhost:3000/todos/' + todoId, {
        headers: {token: token}
    })

    alert(response.data.message)
   
}

conditionalRendering();