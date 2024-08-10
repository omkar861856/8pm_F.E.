console.log(window.screen);

console.log(document);

//iteration or no or repetitions

const number = [1, 2, 3, 4, 5];

// for loop - control strucutre - which determines the flow of code/logic.

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// forEach

// number.forEach();

// function detour / function belong to reference type

//regular function
function Greet() {
  console.log("Greetings ");
}

function Cook() {
  // some cooking logic
}

// anonymous function

const AFunction = function () {
  console.log("An anonymous function");
};

// arrow function - concise syntax introduced in 2015 is es6

// js major changes in standards

// priror es6 and post es6

// template literals

const ArrowFunction = (params) =>
  console.log(`hello from arrow function with ${params}.`);

ArrowFunction("demo");

// function definition - regular functions

// array iterating methods.

// forEach

// 2015 or es v6 - pre es6 and post es6

number.forEach((num) => console.log(num));

console.log("break");

// map

number.map((num) => console.log(num));

//filter // reduce method

//JSON iteration - -JavaScript Object Notation

const person = {
  userName: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// for-in

for (let key in person) {
  console.log(typeof person[key]);

  if (typeof person[key] === "object") {
    console.log("object detected");
  }

  console.log(`${key} is ${person[key]}`);
}


// functions use case
function CheckEligiblity(parameter) {
  console.log(parameter.age);

  // control strucutres

  if (parameter.age < 18) {
    console.log(`${parameter.userName} Get a learner license`);
  } else {
    console.log(`${parameter.userName}  You are eligible for driving`);
  }
}

const person2 = {
  userName: "Jane",
  age: 16,
};

CheckEligiblity(person);

CheckEligiblity(person2);

// end 

