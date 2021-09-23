var cont, texto = " ";

for (cont = 10; cont <= 100; cont = cont + 10) {
    texto += "<br>" + cont + " ° C é igual " + (((9 * cont) + 160) / 5) + " ° F";
}

document.getElementById("demo").innerHTML = texto;