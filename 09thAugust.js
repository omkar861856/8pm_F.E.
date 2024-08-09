console.log(window.screen);

console.log(document);

//iteration or no or repetitions

const number = [1, 2, 3, 4, 5];

// for loop

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}


// forEach 

// number.forEach();


// function detour / function belong to reference type


//regular function
function Greet(){
    console.log("Greetings ")
}

function Cook(){
    // some cooking logic
}

// anonymous function

const AFunction = function(){

    console.log("An anonymous function")

}


// arrow function - concise syntax introduced in 2015 is es6

// js major changes in standards

// priror es6 and post es6

// template literals

const ArrowFunction = params=>console.log(`hello from arrow function with ${params}.`)


ArrowFunction("demo");

// function definition - regular functions

// array iterating methods.

// forEach

number.forEach(num=>console.log(num))

console.log("break")

// map

number.map(num=>console.log(num))

//filter // reduce method


//JSON iteration





