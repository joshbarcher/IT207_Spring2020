
//parent elements (or ancestors)
let header = document.getElementsByTagName("h1")[0];
let body = header.parentElement;
body.style.backgroundColor = "beige";

console.log(body.nodeType);

let quotes = document.querySelectorAll("span.quote")
//let quotes = document.getElementsByClassName("quote");

for (let i = 0; i < quotes.length; i++)
{
    let quote = quotes[i];
    let paragraph = quote.parentElement;

    paragraph.style.backgroundColor = "lightgray";
    paragraph.style.border = "1px solid black";
    paragraph.style.padding = "6px";
}

//children elements (or descendents)
let bodyEle = document.body;
bodyEle.children[0].style.fontSize = "1.2em";
bodyEle.children[1].style.color = "blue";

let ol = document.getElementsByTagName("ol")[0];
for (let i = 0; i < ol.children.length; i++)
{
    ol.children[i].style.fontWeight = "bold";
}









