var cont = 1,
    soma = 1,
    cont_2 = 1;

do {
    cont_2 = 1;
    soma = 1;
    if (cont % 2 == 1) {
        while (cont_2 <= cont) {
            soma *= cont_2;
            cont_2++;
        }
        document.write("<br>  !" + cont + " = " + soma);
    }
    cont++;
} while (cont <= 10);