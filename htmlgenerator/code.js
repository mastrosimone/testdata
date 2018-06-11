var el = document.querySelector("button");

el.addEventListener("click", function(e) {
    console.log(e.targer);
    console.log(e.type);
    
    e.preventDefault();
});

var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("submit")
});

var nome = document.querySelector("#nome");
var cognome = document.querySelector("#cognome");

// var name = nome.nome;
// var cognome = cognome.cognome;

