inicial = parseInt(prompt("Horário de início"));
final = parseInt(prompt("Horário do término"));

if ((final - inicial) > 0) {
    alert("A duração do jogo foi de:" + (final - inicial) + "horas");
} else {
    alert("A duração do jogo foi de:" + ((final - inicial) + 24) + " horas");
}