
//group by selector
let items = document.querySelectorAll("ul li");

for (let i = 0; i < items.length; i++)
{
    let item = items[i];
    console.log(item.innerHTML);
}

//group by tag name
let options = document.getElementsByTagName("option");
for (let i = 0; i < options.length; i++)
{
    console.log(options[i].innerHTML);
}

//group by class name
let odds = document.getElementsByClassName("odd");
for (let i = 0; i < odds.length; i++)
{
    odds[i].style.backgroundColor = "rgb(200, 200, 200)";
}