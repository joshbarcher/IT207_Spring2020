$(document).ready(function(event) {
    //run some code when the DOM is loaded...

    //assigning a new CSS value
    $("li").css("background-color", "gray").text("hello");

    //retrieving a CSS VALUE
    let color = $("li:first-child").css("background-color");
    console.log(color);
});