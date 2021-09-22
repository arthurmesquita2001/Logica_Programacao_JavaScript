var resposta = "s";
var total = 0;

var resposta = prompt("Qual o nome do comodo que voce quer saber a area total");

while (resposta != "NAO") {

    var x = parseFloat(prompt("Valor comprimento"));
    var y = parseFloat(prompt("Valor largura"));
    total = total + (x * y);
    resposta = prompt("Qual o nome do comodo que voce quer saber a area total");
}
document.write("O soma de toda área é: " + total);