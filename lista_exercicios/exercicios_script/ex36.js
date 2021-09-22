h1 = parseInt(prompt("Digite a idade do rapaz"));
h2 = parseInt(prompt("Digite a idade do rapaz"));
m1 = parseInt(prompt("Digite a idade da moça"));
m2 = parseInt(prompt("Digite a idade da moça"));


if (h1 > h2 & m1 > m2) {
    alert("Somando o rapaz mais velho " + h1 + " com a mulher mais nova " + m2 + " = " + (h1 + m2));
    alert("E o produto do rapaz mais novo " + h2 + " com a mulher mais velha " + m1 + " = " + (h2 * m1));
} else
if (h1 > h2 & m2 > m1) {
    alert("Somando o rapaz mais velho " + h1 + " com a mulher mais nova " + m1 + " = " + (h1 + m1));
    alert("E o produto do rapaz mais novo " + h2 + " com a mulher mais velha " + m2 + " = " + (h2 * m2));
} else
if (h2 > h1 & m1 > m2) {
    alert("Somando o rapaz mais velho " + h2 + " com a mulher mais nova " + m2 + " = " + (h2 + m2));
    alert("E o produto do rapaz mais novo " + h1 + " com a mulher mais velha " + m1 + " = " + (h1 * m1));
} else {

    alert("Somando o rapaz mais velho " + h2 + " com a mulher mais nova " + m1 + " = " + (h2 + m1));
    alert("E o produto do rapaz mais novo " + h1 + " com a mulher mais velha " + m2 + " = " + (h1 * m2));
}