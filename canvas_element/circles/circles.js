//get access to our canvas
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

const CIRCLE_MIN_RAD = 5;
const CIRCLE_MAX_RAD = 30;
const CNV_SIZE = 500;
const NUM_CIRCLES = 50;

context.fillStyle = "#cbeaf8";
context.fillRect(0, 0, CNV_SIZE, CNV_SIZE);

for (let i = 1; i <= NUM_CIRCLES; i++)
{
    randomCircle();
}

function randomCircle()
{
    context.beginPath();

    let x = randomNum(CIRCLE_MAX_RAD, CNV_SIZE - CIRCLE_MAX_RAD);
    let y = randomNum(CIRCLE_MAX_RAD, CNV_SIZE - CIRCLE_MAX_RAD);
    let radius = randomNum(CIRCLE_MIN_RAD, CIRCLE_MAX_RAD);

    context.strokeStyle = "black";
    context.fillStyle = "rgb(238,212,65)";

    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}

function randomNum(low, high)
{
    return Math.floor(Math.random() * (high - low + 1)) + low;
}