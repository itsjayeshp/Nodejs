// JavaScript - Functions--------------

function greet(){
    console.log("hello , world!");
}
greet();

// JavaScript - Function Expressions------------------------

const greet = function() {
    console.log("hello , world!");
};
greet();

// JavaScript - Function Parameters:------------------------------

    // Parameters allow you to pass values into functions.

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));


// JavaScript - Default Parameters---------------
    // Default values can be assigned to function parameters.


function greet(name = 'Guest') {
    console.log('Hello, ' + name);
}
greet(); 

// . JavaScript - Function() Constructor---------------------------------
// Functions can be created with the Function() constructor, though it's generally not recommended.

const add = new Function('a', 'b', 'return a + b');
console.log(add(2, 3));  // 5


// JavaScript - Function Hoisting-----------------------------------
// Function declarations are hoisted, meaning they can be called before being defined.

greet();
function greet() {
    console.log('Hello, world!');
}


// JavaScript - Self-Invoking Functions--------------------------
// A function can be invoked automatically when defined by using parentheses.

(function() {
    console.log('Self-invoked!');
})();


// JavaScript - Arrow Functions-------------------------------
// A shorter syntax for writing functions introduced in ES6.

const greet = () => console.log('Hello, world!');
greet();


// JavaScript - Function Invocation----------------------------
// A function is invoked (called) when you use its name followed by parentheses.

function greet() {
    console.log('Hello!');
}
greet();  // Function invocation


// JavaScript - call()-----------------------------
// The call() method allows you to call a function with a specified this value and arguments.

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
const johnweek = {firstName: "jayesh", lastName: "patidar"};
console.log(person.fullName.call(johnweek));  // jayesh patidar


// JavaScript - apply()---------------------
// Similar to call(), but arguments are passed as an array.

console.log(person.fullName.apply(johnweek, []));


// JavaScript - bind()---------------------------------------
// The bind() method creates a new function with a specified this value and arguments.

const boundGreet = person.fullName.bind(johnweek);
console.log(boundGreet());  // jayesh patidar


// JavaScript - Closures---------------------------------
// A closure gives you access to an outer function’s scope from an inner function.

function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    };
}
const increment = outer();
increment();  // 1
increment();  // 2


// JavaScript - Variable Scope-----------------------------
// Scope refers to the visibility of variables. Variables can be either global or local.

let x = 5;  // Global scope
function test() {
    let y = 10;  // Local scope
}


// JavaScript - Global Variables---------------------------
// Variables declared outside any function have global scope.

var name = 'jayesh';  // Global variable


// JavaScript - Smart Function Parameters
// Ensures parameters are valid before use (e.g., using default values or type checking).

function add(a = 0, b = 0) {
    return a + b;
}
