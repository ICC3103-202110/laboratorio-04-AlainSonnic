/*empezando el lab*/

/*
const prompt = require('prompt-sync')();
let name = prompt("Enter your name: ");
console.log(`Hello ${name}`) */

function View(counter){
    return ('Count = '+counter);
}


function update(msg, counter){
    if (msg === "+")
        return (counter + 1);
    
    else{
        return (counter - 1);
    }
}


console.log(View(51));
