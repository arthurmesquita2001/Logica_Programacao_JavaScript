var entrada = parseInt(prompt("Valor"));
var i;
var text = " ";

for (i = 0; i <= 10; i++) {
    text += "<br> O valor de " + entrada + " x " + i + " = " + (i * entrada);
}
document.getElementById('demo').innerHTML = text;