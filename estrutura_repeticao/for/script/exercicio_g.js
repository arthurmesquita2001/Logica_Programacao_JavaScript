var acumulador = 1,
    cont, text = " ";

for (cont = 0; cont <= 15; cont++) {
    if (cont == 0) {
        text += "<br> 3 elevado " + cont + " = 1";
    } else {
        acumulador = acumulador * 3;
        text += "<br> 3 elevado " + cont + " = " + acumulador;
    }
}
document.getElementById('demo').innerHTML = text;