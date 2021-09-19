var eleitores = parseInt(prompt("Total de eleitores"));
var nulos = parseInt(prompt("Votos nulos"));
var brancos = parseInt(prompt("Votos brancos"));
var v = eleitores - (nulos + brancos);

alert("A pct de votos nulos é: " + (nulos * 100 / eleitores) + " %");
alert("A pct de votos brancos é: " + (brancos * 100 / eleitores) + " %");
alert("A pct de votos válidos é: " + (v * 100 / eleitores) + " %");