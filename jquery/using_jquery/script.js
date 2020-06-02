$(document).ready(function() {
    //add event handlers to our buttons
    /*$("button").click(function(event) {
        $(this).toggleClass("glow");
    });

    $("button").focus(function(event) {
        $(event.target).css("border", "1px solid black");
    });

    $("button").blur(function(event) {
        $(event.target).css("border", "1px solid gray");
    });*/

    //add many event handlers in a single step
    $("button").on({
        click: function(event) {
            $(event.target).toggleClass("glow");
        },
        focus: function(event) {
            $(event.target).css("border", "1px solid black");
        },
        blur: function(event) {
            $(event.target).css("border", "1px solid gray");
        }
    });

    //show the text() and html() methods
    $("p#text").html("I am learning jQuery, read more here <a href='https://code.jquery.com/'>link</a>")

    //read or write CSS using jquery
    $("p#text").css("color", "blue");
    console.log($("p#text").css("color"));
});
