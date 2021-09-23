var fixo = parseFloat(prompt("Sálario fixo: "));
var carros_vendidos = parseInt(prompt("Numero total de carros vendidos pelo cidadão: "));
var total_vendas = parseFloat(prompt("Valor total das vendas: "));
var comissao = parseFloat(prompt("Comissão por venda: "));


alert("O sálárío final é: R$ " + ((comissao * carros_vendidos) + (total_vendas * 0.05) + fixo));