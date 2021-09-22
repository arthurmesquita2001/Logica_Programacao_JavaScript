var acumulador = 1,
    aux = 3;
var cont = 0;

while (cont <= 15) {

    if (cont == 0) {
        document.write("<br>3 elevado " + cont + " = 1");
    } else {
        acumulador = acumulador * 3;
        document.write("<br>3 elevado " + cont + " = " + acumulador);
    }
    cont++;
}