
window.onload = function() {
    let textbox = document.getElementsByTagName("input")[0];
    textbox.onkeydown = function(event) {
        //stop the regular entry of a key in the textbox
        event.preventDefault();

        //retrieve the key that was pressed from the KeyEvent
        let key = event.key;
        let code = event.code;

        console.log(key + " - " + code);

        //convert the input text to lowercase
        key = key.toLowerCase();

        //manually enter the text in the textbox
        textbox.value += key;
    };
};