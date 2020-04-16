"use strict";

//constants
const OVERTIME_LIMIT = 40;
const PAY_RATE = 16.5;
const OT_MULTIPLIER = 1.5;

let pay = 0;
let hours = 42;

//multiply pay rate * hours
pay = PAY_RATE * hours;

if (hours > OVERTIME_LIMIT) {
    //remove regular hours and get
    //overtime pay
    hours = hours - OVERTIME_LIMIT;
    pay = pay + (OT_MULTIPLIER * PAY_RATE * hours);
}

//output the pay
console.log(pay);