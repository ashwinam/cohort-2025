let btnEl = document.querySelectorAll('button');
btnEl.forEach(element => {
    element.setAttribute('onclick', 'changeColor(this)');
});

function changeColor(element){
    
    document.body.style.backgroundColor = element.getAttribute('id');
}