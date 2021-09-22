var v1 = 1;
var v2 = -1;
var v3 = 0;
var cont = 0;


while (cont <= 15) {
    v3 = v1 + v2;
    v2 = v1;
    v1 = v3;
    document.write(" , " + v3);
    cont++;
}