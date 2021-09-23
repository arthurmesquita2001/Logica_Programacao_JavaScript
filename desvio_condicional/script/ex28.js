var n1 = parseInt(prompt("Entrada 1"));
var n2 = parseInt(prompt("Entrada 2"));
var n3 = parseInt(prompt("Entrada 3"));

if (n1 > n2 & n1 > n3) {
    alert("O maior é o " + n1);
} else if (n2 > n1 & n2 > n3) {
    alert("O maior é o " + n2);
} else {
    alert("O maior é o 3");
}