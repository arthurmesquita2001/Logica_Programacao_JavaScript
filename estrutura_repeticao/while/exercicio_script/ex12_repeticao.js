var n = parseInt(prompt("Número"));

var maior = n;
var menor = n;

while (n >= 0) {
    if (n > maior) {
        maior = n;
    } else if (n < menor) {
        menor = n;
    }
    n = parseInt(prompt("Número"));
}
document.write("o maior é " + maior + " e o menor é " + menor);