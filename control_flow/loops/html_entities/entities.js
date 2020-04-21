
//create a variable to hold special characters...
const SPACE = "&nbsp;";
let characters = "";

//write a loop to generate the HTML entities
for (let i = 33; i <= 100; i++)
{
    let character = "&#" + i + "; ";

    characters += character + SPACE;
}

//display the characters
let content = document.getElementById("content");
content.innerHTML = characters;
