var n1 = parseInt(prompt("Numero de maçãs compradas: "));

if (n1 < 12 & n1 > 0) {
    document.write(" Valor final: 1,30 * " + n1 + " = R$ " + n1 * 1.30);
} else {
    document.write(" Valor final: 1,00 * " + n1 + " = R$ " + n1);
}