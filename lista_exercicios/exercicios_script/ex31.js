var a = parseFloat(prompt("Numero"));
var b = parseFloat(prompt("Numero"));
var c = parseFloat(prompt("Numero"));


if ((a > b + c) || (b > a + c) || (c > a + b)) {
    alert("Não forma um triângulo");
} else {
    alert("Forma se um triângulo");
}