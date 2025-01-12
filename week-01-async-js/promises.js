class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height
    }

    paint() {
        console.log(`Color of the area is ${this.color}`);
    }
}

const rectangle = new Rectangle(2,2, 'red');

console.log(rectangle.area());
rectangle.paint();

// Some built in classes

const date = new Date();

console.log(date.toISOString());


let map = new Map();

map.set('name', 'ashwin');

console.log(map.get('name'));

console.log(map);



// Promise

function callSetTimeout(resolve, ms) {
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified(){
    let promise = new Promise(callSetTimeout);
    return promise;
}


function callback(resolve){
    console.log('I ran after 3 seconds');
    
}

setTimeoutPromisified().then(callback);

// setTimeoutPromisified Version

