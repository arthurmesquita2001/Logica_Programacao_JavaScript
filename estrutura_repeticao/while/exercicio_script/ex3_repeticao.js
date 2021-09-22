var x = 1;
var res = 0;

while (x <= 500) {
    if (x % 2 == 0) {
        res = res + x;
    }
    x++;

}
document.write("Soma final dos 500  numeros pares é igual: " + res);