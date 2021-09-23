var n0 = parseFloat(prompt("Valor n1: "));
var n1 = parseFloat(prompt("Valor n2: "));
var n2 = parseFloat(prompt("Valor n3: "));
var exercic = parseFloat(prompt("Valor media exercicios: "));

var final = ((n0 + n1 * 2 + n2 * 3) + exercic) / 7;
if (final < 6) {
    document.write("D");
    document.write("<br>" +
        final);

} else if (final >= 6 & final < 7.5) {
    document.write("C");
    document.write("<br>" +
        final);

} else if (final >= 7.5 & final < 9) {
    document.write("B");
    document.write("<br>" +
        final);

} else {
    document.write("A");
    document.write(final);
}