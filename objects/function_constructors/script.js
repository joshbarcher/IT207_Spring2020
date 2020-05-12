
//we define a function constructor as the basis
//of an object
function Circle(radius, color)
{
    //we use this to assign properties or methods
    this.radius = radius;
    this.color = color;
    this.PI = Math.PI;

    this.area = function() {
        return this.PI * this.radius ** 2;
    }
}

let circle1 = new Circle(3, "red");
console.log(circle1.color);
console.log(circle1.area());

let circle2 = new Circle(2, "blue");
console.log(circle2.color);

let para = document.querySelector("p");
console.log(para.nodeType);