var cont;
var result = 0;

for (cont = 1; cont <= 500; cont++) {
    if (cont % 2 == 0) {
        result += cont;
    }
}
document.getElementById('demo').innerHTML = result;