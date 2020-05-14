
let header = document.getElementsByTagName("header")[0];

//set some styles on the header
header.style.backgroundColor = "rgb(100, 22, 39)";
header.style.color = "white";
header.style.fontSize = "1.2em";

let img = document.getElementsByTagName("img")[0];

//set or retrieve HTML attributes
img.setAttribute("src", "images/js_logo.png");
img.setAttribute("width", "50");

console.log(img.getAttribute("width"));

if (img.getAttribute("width") < 100)
{
    console.log("Small image");
}

let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++)
{
    items[i].classList.add("highlight");
}

items[0].classList.add("very-important");
items[1].classList.remove("highlight");
console.log(items[1].classList.contains("highlight"));









