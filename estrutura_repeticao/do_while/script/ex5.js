var cont = 1;
var soma = 0;


do {
    var aux = 1;
    var acumulador = 1;

    var valor = parseInt(prompt("Digite o valor"));

    while (aux <= valor) {
        acumulador = acumulador * aux;
        aux = aux + 1;
    }
    document.write("<br> O fatorial de: " + valor + ". é igual" + acumulador);

    soma = acumulador + soma;



    cont = cont + 1;

} while (cont <= 15);


document.write("<br> O valor final é " + soma);