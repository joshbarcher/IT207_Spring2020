//declaring some objects using literal notation
let classroom = {
    title: "Web Design with JS",
    seats: 24,
    projectAvailable: false,
    students: ["Bruce", "Matilda", "Melanie", "Brandon"],

    teacher: {
        first: "Josh",
        last: "Archer",
        degrees: {
            bachelors: "Computer Science",
            masters: "Computer Science"
        }
    },

    location: {
        city: "auburn",
        state: "wa"
    },

    enrollStudent: function(studentName) {
        this.students.push(studentName);

        //one method calling another
        //this.printStudents();
    },
    printStudents: function() {
        for (let i = 0; i < this.students.length; i++)
        {
            console.log(this.students[i]);
        }
    }
};

let classroom2 = {
    title: "Java 22",
    seats: 26,
    projectAvailable: false,
    students: ["Julie"],

    teacher: {
        first: "Susan",
        last: "Smith",
        degrees: {
            bachelors: "Computer Engineering"
        }
    },

    location: {
        city: "auburn",
        state: "wa"
    }
};

//verifying the types of properties
console.log(typeof classroom.seats);
console.log(typeof classroom.projectAvailable);
console.log(typeof classroom.title);
console.log(typeof classroom);
console.log(typeof classroom.students);

//log an object to the console
console.log(classroom);

//used extended dot notation
console.log(classroom.teacher.first);
console.log("State: " + classroom.location.state);
console.log("First degree: " + classroom.teacher.degrees.bachelors)

//call the methods on our objects
classroom.enrollStudent("Cesar");
classroom.enrollStudent("Ethan");
classroom.enrollStudent("David");
console.log(classroom);

classroom.printStudents();

//you can dynamically add properties and methods
let fruit = {};
fruit.isTasty = true;
fruit.name = "Mango";
fruit.eat = function() {
    console.log("You ate: " + this.name);
}

console.log(fruit.name); //mango
fruit.eat();

//you can use square bracket notation optionally
fruit["pricePerPound"] = 1.99;
fruit["favorite"] = false; //this is the same as fruit.favorite = false;

console.log(fruit["favorite"]); //false
console.log(fruit.favorite); //false

fruit["is citrus"] = true;
console.log(fruit["is citrus"]); //true
//console.log(fruit.is citrus); //error!

//loop over properties in an object
for (let property in fruit)
{
    console.log(property + " is a property");
}

for (let windowProperty in window)
{
    console.log(windowProperty + " is a window property");
}

//remove properties from an object
console.log(fruit.pricePerPound); //1.99
delete fruit.pricePerPound;
console.log(fruit.pricePerPound); //undefined




