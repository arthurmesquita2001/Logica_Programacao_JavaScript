var Kgmac = parseFloat(prompt("Quantos kg de maçã foram comprados?"));
var Kgmor = parseFloat(prompt("Quantos kg de morango foram comprados?"));
var preco_apple;
var preco_morango;

if (Kgmac <= 5) {
    preco_apple = 1.8 * Kgmac;
} else {
    preco_apple = 1.5 * Kgmac;
}
if (Kgmor <= 5) {
    preco_morango = 2.5 * Kgmac;
} else {
    preco_morango = 2.2 * Kgmac;
}

if ((Kgmac + Kgmor > 8) || (preco_morango + preco_apple > 25)) {
    alert("O final é: " + ((preco_apple + preco_morango) * 0.9));
} else {
    alert("O final é: " + (preco_apple + preco_morango));
}