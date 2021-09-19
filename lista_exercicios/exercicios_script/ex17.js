var n1 = parseFloat(prompt("1°nota: "));
var n2 = parseFloat(prompt("2°nota: "));

if (((n1 + n2) / 2) >= 6) {
    document.write(" Aprovado : " + ((n1 + n2) / 2));
} else {
    document.write(" Reprovado : " + ((n1 + n2) / 2));
}