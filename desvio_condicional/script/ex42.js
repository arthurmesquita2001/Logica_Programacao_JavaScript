var codigo = parseInt(prompt("Digite o código"));
var ano_nasc = parseInt(prompt("Digite o ano de nascimento"));
var tempo_empres = parseInt(prompt("Digite o ano de ingresso"));


if ((2021 - ano_nasc >= 65) || (2021 - tempo_empres >= 30) || ((2021 - ano_nasc >= 60) & (2021 - tempo_empres >= 25))) {
    document.write("Requerer aposentadoria,idade = " + (2021 - ano_nasc) + " anos e tempo de trabalho = " + (2021 - tempo_empres) + " anos");
} else {
    document.write("Não requerer, idade = " + (2021 - ano_nasc) + " anos e tempo de trabalho = " + (2021 - tempo_empres) + " anos");
}