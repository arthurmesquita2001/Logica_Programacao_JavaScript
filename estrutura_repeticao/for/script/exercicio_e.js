var cont;
var tex = " ";

for (cont = 0; cont <= 20; cont++) {
    if (cont % 2 == 1) {
        tex += "<br>" + cont + " é impar";
    }
}

document.getElementById("demo").innerHTML = tex