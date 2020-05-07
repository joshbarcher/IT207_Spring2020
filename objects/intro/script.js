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

console.log(typeof classroom.seats);
console.log(typeof classroom.projectAvailable);
console.log(typeof classroom.title);
console.log(typeof classroom);
console.log(typeof classroom.students);

console.log(classroom);

console.log(classroom.teacher.first);
console.log("State: " + classroom.location.state);
console.log("First degree: " + classroom.teacher.degrees.bachelors)

classroom.enrollStudent("Cesar");
classroom.enrollStudent("Ethan");
classroom.enrollStudent("David");
console.log(classroom);

classroom.printStudents();