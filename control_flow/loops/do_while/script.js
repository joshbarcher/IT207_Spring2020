let number;
do
{
    number = prompt("Enter a number");
    number = parseInt(number);
} while (Number.isNaN(number)); //don't forget this!

alert(number + " is a number");