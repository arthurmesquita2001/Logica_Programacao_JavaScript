var a = parseInt(prompt("Numero"));
var b = parseInt(prompt("Numero"));
var qtd = 0;
do {
    a = a - b;
    qtd++;

} while (a >= b)
alert("O resultado é " + qtd);