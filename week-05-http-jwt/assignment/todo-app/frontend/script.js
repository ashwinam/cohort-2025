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