var acumulador = 0,
    qtd = 0;
do {
    var n = parseInt(prompt("Entrada"));
    if (n >= 0) {
        acumulador = n + acumulador;
        qtd++;
    }
} while (n >= 0);

document.write("O final é: " + acumulador + ", a quantidade de valores lidos é: " + qtd + " Logo média aritmética -> " + acumulador + " / " + qtd + " = " + (acumulador / qtd));