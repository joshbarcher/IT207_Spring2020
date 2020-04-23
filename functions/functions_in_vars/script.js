
let isEven = function(num) {
    return num % 2 === 0;
};

//console.log(isEven(10));
//console.log(isEven(11));

checkAll(isEven, 3, 8, 12);

function checkAll(checkNum, a, b, c)
{
    if (checkNum(a) === true)
    {
        console.log(a + " is true");
    }

    if (checkNum(b) === true)
    {
        console.log(b + " is true");
    }

    if (checkNum(c) === true)
    {
        console.log(c + " is true");
    }
}