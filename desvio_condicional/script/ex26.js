var qtd_atual = parseInt(prompt("Estoque atual"));
var qtd_min = parseInt(prompt("Estoque mínimo"));
var qtd_max = parseInt(prompt("Estoque máximo"));

if ((qtd_atual) >= ((qtd_max + qtd_min) / 2)) {
    alert("Não é necessário comprar ");
} else {
    alert("Efetuar compra ");
}