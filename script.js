let name = prompt("What is your name?");
let age = prompt("How old are you?");

console.log("Hello " + name + "!");

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);

console.log("The sum is: " + result);

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

alert("Hello " + name + "! Your result is " + result);