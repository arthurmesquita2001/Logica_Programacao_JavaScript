var v1 = parseInt(prompt("numero"));
var v2 = parseInt(prompt("numero"));
var v3 = parseInt(prompt("numero"));

if ((v1 > v2) & (v2 > v3)) {
    alert("Ordem é" + v3 + "," + v2 + "," + v1);
} else
if ((v1 > v3) & (v3 > v2)) {
    alert("Ordem é" + v2 + "," + v3 + "," + v1);
} else
if ((v3 > v1) & (v1 > v2)) {
    alert("Ordem é" + v2 + "," + v1 + "," + v3);
} else
if ((v3 > v2) & (v2 > v1)) {
    alert("Ordem é" + v1 + "," + v2 + "," + v3);
} else
if ((v2 > v1) & (v1 > v3)) {
    alert("Ordem é" + v3 + "," + v1 + "," + v2);
} else {
    alert("Ordem é" + v1 + "," + v3 + "," + v2);
}