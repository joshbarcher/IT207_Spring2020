window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = loadCat;
}

function loadCat()
{
    fetch("https://api.thecatapi.com/v1/images/search", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let data = json[0];
        let image = document.getElementById("portrait");
        image.setAttribute("src", data.url);
    });
}
