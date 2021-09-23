l = parseFloat(prompt("Quantos litros foram utilizados"));
tipo = (prompt("Foi A ou G?"));

if (l <= 20 & tipo == "A") {
    alert("Preço final é: " + (2.90 * 0.97 * l));
} else if (l > 20 & tipo == "A") {
    alert("Preço final é: " + (2.90 * 0.95 * l));
} else if (l <= 20 & tipo == "G") {
    alert("Preço final é: " + (3.30 * 0.96 * l));
} else {
    alert("Preço final é: " + (3.30 * 0.94 * l));
}