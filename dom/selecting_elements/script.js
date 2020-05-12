
//get all our list items
let items = document.querySelectorAll("ul li");

for (let i = 0; i < items.length; i++)
{
    let item = items[i];
    console.log(item.innerText);
}

let options = document.getElementsByTagName("option");

for (let i = 0; i < options.length; i++)
{
    console.log(options[i].innerText);
}