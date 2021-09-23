var n = parseFloat(prompt("Em qual ano você nasceu: "));


if ((2021 - n) >= 16) {
    document.write(" poderá votar ");
} else {
    document.write("não poderá votar ");
}