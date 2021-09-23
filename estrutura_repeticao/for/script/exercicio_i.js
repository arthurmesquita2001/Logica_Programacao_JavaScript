var a = 1,
    b = -1,
    c = 0,
    cont, text = " ";

for (cont = 0; cont <= 15; cont++) {
    c = a + b;
    b = a;
    a = c;
    text += c + " ";
}
document.getElementById("demo").innerHTML = text;