var sal = parseFloat(prompt("Salário: "));
var reajuste = parseFloat(prompt("Reajuste"));


alert("O salário com reajuste é: R$ " + ((1 + reajuste / 100) * sal));