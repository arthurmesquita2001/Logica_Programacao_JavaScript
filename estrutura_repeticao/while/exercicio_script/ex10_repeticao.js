var i = 50;
var acumulador = 0,
    n_valores = 0;

while (i <= 70) {
    if (i % 2 == 0) {
        acumulador += i;
        n_valores++;

    }
    i++;
}

alert("O valor é " + acumulador + ", logo o valor da média igual " + (acumulador / n_valores));