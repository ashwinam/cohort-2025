function signup(){
    alert('i am clicked')
}

function signin(){
    alert('i am clicked')
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