var base = parseInt(prompt("valor da base"));
var expoente = parseInt(prompt("valor do expoente"));
var cont = 0;
var acumulador = 1;
var text = " ";

for (cont = 0; cont <= expoente; cont++) {
    if (cont == 0) {
        text += "<br>" + base + " elevado " + cont + " = 1";
    } else {
        acumulador *= base;
        text += "<br>" + base + " elevado " + cont + " = " + acumulador;
    }
}
document.getElementById('demo').innerHTML = text;