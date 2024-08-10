// string and string methods

let str = "Strings are Important";

let tStr = `string`;

// string methods

console.log(str.length); 

console.log(str.charAt(2));

console.log(str.indexOf("important"));

console.log(str.includes("importan"));

console.log(str.toLowerCase());

console.log(str.toUpperCase());

console.log(str.replace("Important", "Fantastic"));

console.log(str.split(" ")); //convert strings to arrays

console.log(str.concat(" and are useful"));

console.log(str.trim()); //removes whitespaces from both sides

console.log(str.trimStart()); //removes whitespaces from the start

console.log(str.trimEnd()); //removes whitespaces from the end

console.log(str.startsWith("Str"));

console.log(str.endsWith("important"));

console.log(str.repeat(3));

console.log(str.padStart(30, "-"));

console.log(str.padEnd(30, "-"));

//slice 

console.log(str.slice(2, 5));

console.log(str.slice(-5, -2));

console.log(str.slice(2));

console.log(str.slice(-5));

// substring

console.log(str.substring(2, 5));

console.log(str.substring(-5, -2));

console.log(str.substring(2));

console.log(str.substring(-5));

// substr

console.log(str.substr(2, 5));

console.log(str.substr(-5, -2));

console.log(str.substr(2));

console.log(str.substr(-5));

// // regex


// let password = "Strong@123"

// let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])(?=.{8,})/
    

// // match

// // console.log(password.match(passwordRegex));

// // test

// console.log(passwordRegex.test(password));

// // replace

// console.log(password.replace(passwordRegex, "StrongPassword"));

// console.log(password.replace(/(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])(?=.{8,})/g, "StrongPassword"));

// split

console.log(str.split(" ")); // converted string to array

console.log(str.split(" ", 3));

console.log(str.split(" ", -3));

console.log(str.split(" ", 3).join("-")); //join will convert array back to string

//  Json iteration or Object methods - know ltr.

let jsonObj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

// for-in

for (let key in jsonObj) {
    console.log(key, jsonObj[key]);
}

//for-of

for (let value of Object.values(jsonObj)) {
    console.log(value);
}

// Object.entries

console.log(Object.entries(jsonObj)); // object to an array format

for (let [key, value] of Object.entries(jsonObj)) {
    console.log(key, value);
}


let fordMustang = new Object({
    make: "Ford",
    model: "Mustang",
    year: 1964,
    color: "Red",
    mileage: 100000,
    engine: {
        cylinders: 4,
        displacement: 1.8,
        type: "V8"
    }
})

console.log(fordMustang);

// Object.keys

console.log(Object.keys(fordMustang)); // all keys to array format

const corvette = {
    make: "Chevrolet",
    model: "Corvette",
    year: 1970,
    color: "Black",
    mileage: 50000,
    engine: {
        cylinders: 4,
        displacement: 1.6,
        type: "V6"
    }
}

// no use of Object.assign - this will alter original object

//object.freeze()

Object.freeze(corvette);

corvette.color = "White";

console.log(corvette); // color will not change

let corvette1 = corvette;

corvette1.color = "White";

console.log(corvette);

// Object.assign = not to alter the original object

let newFordMustang = Object.assign({}, fordMustang);

newFordMustang.color = "Blue";

console.log(fordMustang);

console.log(newFordMustang);

let js;


let html ={
    ///cover html
}

let css = {
    ///cover css
}

js = 10;


html.strength = 10;

css.strength = 20;

js = 30;

html.strength = 40;

css.strength = 50;

///programming language - single threaded - 





























