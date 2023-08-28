"use strict";
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
};
console.log(object1.name); //shift + alt + down-arrow (copy down)
console.log(object1.marks.math);
// ---------------------------------------
//type aliases:
//pre-defined types  ---- user-defined
let a;
let b;
let c;
let d;
let e;
let profile = {
    name: "Sara",
    age: 20,
    // isActive: true 
};
let country = {
    country: "Pakistan",
    size: 250,
    population: 25,
    language: "URDU",
    hasFlag: true
};
// ----------------------------------------- union literals and narrowing
let passkey;
function passfunc(passkey) {
    if (typeof passkey === "string") {
        passkey.toLowerCase;
    }
    else if (typeof passkey === "number") {
        passkey.toExponential;
    }
}
// let myarray: boolean[] = ["a",3, true]
let myarray2 = ["a"];
let myarray3 = ["a", 5, true];
// string[] | number[] | boolean[]!=  (string | number |boolean)[]
