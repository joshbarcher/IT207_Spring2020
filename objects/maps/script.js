
//map the frequency of characters in a string
let text = "where in the world is carmen sandiego?";
let count = {};

//loop over each character and add it to the map
for (let i = 0; i < text.length; i++)
{
    //character = a
    let character = text[i]; //access a character by index, similar to an array

    //determine if the count map has a property for a character
    if (!(character in count))
    {
        count[character] = 0;
    }
    count[character]++;
}
console.log(count);

for (let character in count) //loop over the keys in the map
{
    console.log(character + ": " + count[character]); //print out value
}

let highestCount = 0;
for (let character in count) //loop over the keys in the map
{
    let charCount = count[character];
    if (charCount > highestCount)
    {
        highestCount = charCount;
    }
}
console.log("Most frequent char: " + highestCount);

//movies example
let moviesMap = {};

//add some key value pairs
moviesMap["Josh"] = "The Lord of the Rings Trilogy";
moviesMap["Cesar"] = "Interstellar";
moviesMap["Ryan"] = "Over the Top";
moviesMap["Ethan"] = "Who Framed Roger Rabbit";
moviesMap["Mark"] = "Tales From Earthsea";

//look up elements in the map by
//1. providing a key
//2. retrieve a value
console.log(moviesMap["Mark"]); //"Tales From Earthsea"
console.log(moviesMap["Ryan"]); //"Over the Top"

let name = prompt("Enter a name");
console.log(moviesMap[name]);