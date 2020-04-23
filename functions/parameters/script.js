
//intentionally omit all parameters
function addAll()
{
    //arrays have a length property (the number of elements in the array)
    //the positions in the array (indices) are within the range [0, array.length - 1] -> [0, 6]

    //no numbers?
    if (arguments.length === 0)
    {
        return undefined;
    }

    //loop over the arguments array and add each number together
    let sum = 0;

    for (let i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }

    return sum;
}

console.log(addAll());
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2, 3, 4, 5));
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));