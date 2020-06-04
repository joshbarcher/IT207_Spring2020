
window.onload = function() {
    let button = document.getElementsByTagName("button")[0];
    button.onclick = clickButton;
}

function clickButton(event)
{
    //identify the radio button that was clicked
    let radios = document.querySelectorAll("input[name='hobby']");
    for (let i = 0; i < radios.length; i++)
    {
        let radio = radios[i];
        if (radio.checked)
        {
            //show it
            let para = document.getElementById("show-hobby");
            para.textContent = radio.value;
            break;
        }
    }
}