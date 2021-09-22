var acumulador = 1;
aux = 3;
var cont = 0;
var base = parseInt(prompt("Digite o valor da base"));
var expoente = parseInt(prompt("Digite o valor do expoente"));


while (cont <= expoente) {

    if (cont == 0) {
        document.write("<br>" + base + " elevado " + cont + " = 1");
    } else {
        acumulador = acumulador * base;
        document.write("<br>" + base + " elevado " + cont + " = " + acumulador);
    }
    cont++;
}