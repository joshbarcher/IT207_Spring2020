
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.beginPath();
context.fillStyle = "#91c7d2";
context.fillRect(0, 0, 500, 500);

//draw a building
context.fillStyle = "black";
context.fillRect(200, 200, 100, 200);

//draw some windows
let buildingWindow = 10;
let spacer = 5;

let count = 100 / (buildingWindow + spacer);

//draw a certain number of windows
let windowX = 205;
for (let i = 1; i <= count; i++)
{
    context.fillStyle = "white";
    context.fillRect(windowX, 205, buildingWindow, buildingWindow);
    windowX += 15;
}

context.fill();

function drawSkyline()
{
    //do some stuff...

    for (let i = 0; i < 10; i++)
    {
        drawBuilding();
    }
}

function drawBuilding()
{

}






