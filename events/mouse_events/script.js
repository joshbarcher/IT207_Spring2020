
window.onload = function(event) {
    //register event handler
    let img = document.querySelector("img");
    img.onclick = imageClick;
    img.onmousemove = mouseMove;
};

function imageClick(event)
{
    let left = Math.random() * 500;
    let top = Math.random() * 500;

    event.target.style.paddingLeft = left + "px";
    event.target.style.paddingTop = top + "px";
}

function mouseMove(event)
{
    let x = event.clientX;
    let y = event.clientY;

    console.log(x + ", " + y);
}