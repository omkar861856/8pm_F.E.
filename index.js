//data types - primitive data types && reference data types

const a = "string";
const b = 3;
let c = true;
let d = null;
let f; // initialization of an identifier

// reference data types - arrays, objects, functions

const g = {
    name: "John",
    age: 30
}

const h = ["apple", 3,  {
    name: "John",
    age: 30
} ];


function greet() {
    console.log("Hello World!");
}

greet();



//naming rules - if, for , let , const, function (reserved words cannot be used)


// type of - debugging

console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // object (null)
console.log(typeof f); // undefined
console.log(typeof greet); //
console.log(h);


//

h[1] = 4

console.log(h);


// copy by value and copy reference


let j = 3;

let k = j;

j = 4;


console.log(k);


let v = {
    name: "John",
    age: 30
}

let w = v;

v.name = "Jane";

w.age = 27;

console.log(w);

// const window = {
//     navigation:{},
//     location: {},
//     history: {},
//     document: {
//         title: "Page Title",
//         body: {
//             innerHTML: "<h1>Hello World!</h1>"
//         }
//     },
// }

// experiment with window object

console.log(window)



