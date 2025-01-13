let i = 0;

// setInterval(function(){
//     console.clear();
//     console.log(i);
//     i++;
    
// },1000)

// using setTimenout

function timer() {
    setTimeout(function (){
        console.clear();
        console.log(i);
        i++;
        timer();
    }, 1000);

}

timer()