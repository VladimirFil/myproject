"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

let num = 20;

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 4));
// console.log(calc(10, 6));
// console.log(calc(8, 20));

function ret() {
    let num = 50;
    return (num);
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");
};

logger();

const calc = (a, b) => {
    console.log(1);
    return a + b;
};