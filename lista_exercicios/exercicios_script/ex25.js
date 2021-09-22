var conta = parseInt(prompt("Número da conta"));
var saldo = parseFloat(prompt("Saldo: "));
var credito = parseFloat(prompt("Crédito"));
var debito = parseFloat(prompt("Débito"));

if ((saldo - debito + credito) >= 0) {
    alert("Saldo positivo: " + (saldo - debito + credito));
} else {
    alert("Saldo negativo: " + (saldo - debito + credito));
}