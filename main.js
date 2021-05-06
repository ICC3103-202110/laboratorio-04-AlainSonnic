/*empezando el lab*/


function View(counter){
    return (counter);
}

function update(msg, counter){
    if (msg === "+")
        return (counter += 1);
    
    if (msg === "-")
        return (counter -= 1);
}

function app(counter){
    while (true) {
        const currentView = View(counter);
        console.clear()
        console.log("Count = ",View(currentView));
        const prompt = require('prompt-sync')();
        const msg = prompt("What would you do ? :  ");
        counter = update(msg, counter);
    }
}

app(0)
console.log(app());
