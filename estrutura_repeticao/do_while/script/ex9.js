var maior = 0,
    menor = 0;
var n = parseInt(prompt("N: "));
maior = n;
menor = n;

do {
    if (maior < n) {
        maior = n;
    } else if (menor > n) {
        menor = n;
    }
    var n = parseInt(prompt("N: "));
} while (n >= 0);

alert("O maior é: " + maior + ". E o menor é: " + menor);