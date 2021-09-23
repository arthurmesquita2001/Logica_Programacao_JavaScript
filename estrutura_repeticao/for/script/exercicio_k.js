var cont, texto = " ",
    k = 1,
    tudo = 1;

for (cont = 0; cont <= 10; cont = cont + 1) {
    k = 1;
    tudo = 1;
    if (cont % 2 == 1) {
        while (k <= cont) {
            tudo *= k;
            k++;
        }
        texto += "<br> !" + cont + " é " + tudo;
    }

}

document.getElementById("demo").innerHTML = texto;