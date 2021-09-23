time_x = parseInt(prompt("Quantidade de gols do time 1:"));
time_y = parseInt(prompt("Quantidade de gols do time 3:"));

if (time_x == time_y) {
    alert("O resultado foi empate: ");
} else if (time_y > time_x) {
    alert("O time 3 ganhou o jogo");
} else {
    alert("O time 1 ganhou o jogo");
}