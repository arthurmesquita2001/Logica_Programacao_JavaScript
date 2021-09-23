var total = 0;
do {
    var comodo = prompt("Qual região da casa que você quer?");
    if (comodo != "NAO") {
        var comprimeto = parseFloat(prompt("Comprimento"));
        var largu = parseFloat(prompt("Largura"));
        total = total + (comprimeto + largu);
    }
} while (comodo != "NAO");

alert(" área = " + total);