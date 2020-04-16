//get user inputs
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

//convert the string inputs to numbers
num1 = parseInt(num1);
num2 = parseInt(num2);

//get our result and show it to the user
let sum = num1 + num2;
alert(num1 + " + " + num2 + " = " + sum);