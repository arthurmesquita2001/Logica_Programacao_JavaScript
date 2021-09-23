var cont = 0,
    acumulador = 0.0;

do {
    acumulador = acumulador + 2 ** cont;
    cont++;
}
while (cont <= 64);

alert("O valor é: " + acumulador);