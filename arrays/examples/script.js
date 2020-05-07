
//how to declare groups of elements (using array)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fish = ["shark", "swordfish", "kelp"];
let mixed = [100, "apple lane", "Seattle", "WA", 98000, true];

//this works, but avoid this notation
let phoneNumber = new Array("222", "333", "4444");

console.log(numbers);
console.log(fish);

console.log("Length of mixed: " + mixed.length);
console.log(typeof mixed[0]);
console.log(typeof mixed[1]);
console.log(typeof mixed[4]);
console.log(typeof mixed[5]);

let point = {
    x: 1,
    y: 3
};

//storing objects in a mixed-type array
let array = [point, "Josh", 100];

//how can we loop over an array

//loop from 0 -> numbers.length - 1
for (let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}

//print out the average of all numbers in the numbers array
let sum = 0;
for (let i = 0; i < numbers.length; i++)
{
    let num = numbers[i];
    sum += num;
}
let average = sum / numbers.length;
console.log(average);

//most languages have a for-each loop
//format: for(element in group)
numbers.forEach(function(element) {
    console.log(Math.sqrt(element));
});














