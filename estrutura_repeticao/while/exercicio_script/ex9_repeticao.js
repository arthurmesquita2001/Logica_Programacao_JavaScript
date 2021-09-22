var valor;
var somatorio = 0;
var cont = 0

while (cont < 10) {
    valor = parseInt(prompt("Entrada valo"));
    somatorio = somatorio + valor;
    cont++;
}

document.write("O total é " + somatorio + " e divido por 10 é " + (somatorio / 10));