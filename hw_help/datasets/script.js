let classes = [
    {
        name: "IT 207",
        students: 12,
        projector: false
    },
    {
        name: "IT 206",
        students: 20,
        projector: true
    },
    {
        name: "IT 219",
        students: 30,
        projector: true
    }
]

//interesting facts: total number of students
let total = 0;
for (let i = 0; i < classes.length; i++)
{
    let singleClass = classes[i];
    total += singleClass.students;
}

let span = document.querySelector("span");
span.textContent = total;













