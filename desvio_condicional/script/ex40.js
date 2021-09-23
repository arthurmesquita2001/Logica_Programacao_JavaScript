var nome = prompt("Produto: ")
var qtd = parseInt(prompt("Unidades: "));
var p_unitario = parseFloat(prompt("Valor unidade: "));

if (qtd <= 5) {
    document.write("Total = " + (qtd * p_unitario) + "<br> Desconto = " + (qtd * p_unitario * 0.02) + " <br> Total a pagar = R$" + (qtd * p_unitario * 0.98));
} else if (qtd > 5 & qtd <= 10) {
    document.write("Total = " + (qtd * p_unitario) + "<br> Desconto = " + (qtd * p_unitario * 0.03) + " <br> Total a pagar = R$" + (qtd * p_unitario * 0.97));
} else {
    document.write("Total = " + (qtd * p_unitario) + "<br> Desconto = " + (qtd * p_unitario * 0.05) + " <br> Total a pagar = R$" + (qtd * p_unitario * 0.95));
}