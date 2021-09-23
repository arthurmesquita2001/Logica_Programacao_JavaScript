var somatorio = 0,
    z = 1;

do {
    if (z % 2 == 0) {
        somatorio = somatorio + z;
    }
    z++;

} while (z <= 500);

alert("O valor é: " + somatorio);