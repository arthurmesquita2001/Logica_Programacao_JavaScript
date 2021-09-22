var horas_trabalhadas = parseInt(prompt("Quantas horas foram trabalhadas no mês:"));
var salario_hora = parseFloat(prompt("Valor por hora: "));
var salario_final;

if (horas_trabalhadas > 160) {
    salario_final = (160 * salario_hora) + (horas_trabalhadas - 160) * (1.5 * salario_hora);
    alert("O salário final é: " + salario_final);
} else {
    alert("O salário final é: " + (salario_hora * horas_trabalhadas));
}