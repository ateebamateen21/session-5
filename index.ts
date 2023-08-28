/*
objects and nested objects
type aliases
interfaces
union literals
narrowing
 */

let object1 = {
    name: "Ateeba",
    age: 19,
    marks: {
        math: 90,
        english: 80,
        biology: 10,
        socialsciences: {
            history: 60,
            geography: 50
        }
    }
}

console.log(object1.name)  //shift + alt + down-arrow (copy down)
console.log(object1.marks.math)



// ---------------------------------------

//type aliases:

//pre-defined types  ---- user-defined
let a: string;
let b: number;
let c: boolean;
let d: string[];
let e: number[];
//I have created my own type

// ------------------------------------- types
type mytype = {
    name: string,
    age: number,
    isActive?: boolean //optional

}

let profile: mytype = {
    name: "Sara",
    age: 20,
    // isActive: true 

}

// ------------------------------- interfaces

interface myinterface {
    country: string,
    size: number,
    population: number,
    language: string,
    hasFlag?: boolean
}


let country: myinterface = {
    country: "Pakistan",
    size: 250,
    population: 25,
    language: "URDU",
    hasFlag: true
}

// ----------------------------------------- union literals and narrowing

let passkey: number | string;

function passfunc (passkey: number | string ){
if (typeof passkey === "string"){
    passkey.toLowerCase
}
else if (typeof passkey === "number"){
passkey.toExponential
}
}


// let myarray: boolean[] = ["a",3, true]
let myarray2: string[] | number[] | boolean[]= ["a"]
let myarray3: (string | number |boolean)[]= ["a", 5, true ]


// string[] | number[] | boolean[]!=  (string | number |boolean)[]



