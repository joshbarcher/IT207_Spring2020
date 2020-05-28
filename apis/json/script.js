
let movie = {
    title: "Godzilla",
    length: 130,
    genre: "Action"
};

//convert from JS object to JSON text
let json = JSON.stringify(movie);

console.log(movie);
console.log(json);

//convert from JSON text back to a JS object
let movieObject = JSON.parse(json);
console.log(movieObject);