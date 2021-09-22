var salario_fixo = parseFloat(prompt("Salário fixo:"));
var total_vendas = parseFloat(prompt("Digite o total de vendas: "));
var salario_final;

if (total_vendas > 1500) {
    salario_final = salario_fixo + (1500 * 0.03) + (total_vendas - 1500) * 0.05;
    alert("O salário final é: " + salario_final);
} else {
    alert("O salário final é: " + (salario_fixo + (total_vendas * 0.03)));
}