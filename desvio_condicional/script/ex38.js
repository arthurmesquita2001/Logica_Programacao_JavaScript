var usuario = parseInt(prompt("Código: "));

if (usuario == 1234) {
    var senha = parseInt(prompt("Senha"));

    if (senha == 9999) {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
} else {
    alert("Usuario inválidos");
}