
//access the context of our canvas
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

//draw the entire figure
drawStickFigure();

//draw a stick figure (head, body, arms, legs)
function drawStickFigure()
{
    drawHead();
    drawBody();
}

//draw head
function drawHead()
{
    context.beginPath();

    //x, y, radius, startDeg, endDeg
    //360 degrees = 2pi radians
    context.arc(250, 250, 50, 0, 2 * Math.PI);

    context.fillStyle = "#00fffb"
    context.fill(); //fill a shape...

    context.fillStyle = "black"
    context.stroke(); //draw an outline...
}

//draw body
function drawBody()
{
    //draw the core of the body...
    context.beginPath();

    //set my color and draw the line
    context.fillStyle = "black"
    context.moveTo(250, 300);
    context.lineTo(250, 400);

    context.stroke();

    drawArms();
    drawLegs();
}

//draw arms
function drawArms()
{
    context.beginPath();

    //set my color and draw the line
    context.fillStyle = "black"
    context.moveTo(200, 350);
    context.lineTo(300, 350);

    context.stroke();
}

//draw legs
function drawLegs()
{
    context.beginPath();

    //set my color and draw the line
    context.fillStyle = "black"


    context.stroke();
}