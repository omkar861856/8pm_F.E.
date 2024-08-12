//programming language - single threaded

//function and return keyword

//regular function

Greet(3);

function Greet(parameter) {
  console.log("greeting");
  //logic
}

function Cook(veggies) {
  return "dish" + " " + veggies;
}

const dish = Cook("brinjal");

console.log(dish);

//  a("param")

//anonymous function

let a = function (parameter) {
  //logic
  console.log(parameter);
};

a("paramter");

// arrow function

let b = () => {
  a("called");

  let d = (p) => {
    console.log(p);
  };

  d("local scope");
  //logic
};

b();

// IIFE function - Immediately invoked function expression

//  (
//     (paramter)=>{
//         paramter
//         //logic
//     }
//  )(true)

//hoisting and scope

// let , const - hoisted

// functions hoisted in entirity

// mrf methods

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map

// arithmatic methods

let p = 3;

p += 4; // p = p + 4

// DRY principles - Dont Repeat yourself

const mappedNumber = number.map((num, index, array) => {
  return num * 2;
});

console.log(mappedNumber);

// reduce methods

const reducedArray = number.reduce((acc, curr) => {
  return (acc += curr); // acc = acc + curr
}, 0);

console.log(reducedArray);

// filter

//error handling

function Filtered(n) {
  try {
    const filteredArray = n.filter((num, index, array) => {
      return num % 2 === 0 && num < 6;
    });

    return filteredArray;
  } catch (error) {
    console.log(error);
  }
}

console.log(Filtered(number));

// spread and rest operators - es6

// spread operator

const number2 = [...number, 11, 12, 13];

console.log(number2);

// rest operator

function sum(...arg) {
  return arg.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 3, 4, 5));

//array and object destructuring

const [first, second, ...others] = number; // array destructuring

console.log(first, second, others);

const newObj = {
    name: "John",
    age: 30,
    city: "New York"
}

// DRY - dont repeat yourself

const {name, age} = newObj; // obj destructuring

console.log(name, age);