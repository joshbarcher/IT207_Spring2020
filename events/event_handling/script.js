

window.onload = function() {
    let elements = document.querySelectorAll(
        "div, section, p");
    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        element.onclick = function(event) {
            //stop event bubbling
            event.stopPropagation();

            element.style.backgroundColor = "beige";
            console.log("Changed background color of " + element.tagName);
        }
    }

    let count = 0;
    for (let i = 0; i <= 1000000000; i++) {
        count++;
    }
    console.log(count);
}

