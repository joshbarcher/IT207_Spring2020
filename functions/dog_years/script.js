let dogYears = 7;
let humanYears = dogToHumanYears(dogYears);
console.log("Your dog is " + humanYears + " in human years");

/* this function accepts a number of dog years
   and returns the associated number of human years.
*/
function dogToHumanYears(years)
{
    let humanYears = 0;

    //ages 1-3 - 10 human years to dog years
    if (years <= 3)
    {
        humanYears = years * 10;
    }
    //other ages - 7 human years to dog years
    else
    {
        humanYears = 30; //first three dog years
        years -= 3;
        humanYears += (years * 7);
    }
    return humanYears;
}
