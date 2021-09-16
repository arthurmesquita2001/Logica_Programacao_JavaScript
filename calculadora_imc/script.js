function calcular() {
    var bmi;
    var resultado = document.getElementById("resultado");


    var peso = parseInt(document.getElementById("peso").value);
    document.getElementById('peso-valor').textContent = peso + " Kg";

    var altura = parseInt(document.getElementById("altura").value);
    document.getElementById('altura-valor').textContent = altura + " cm";

    bmi = (peso / Math.pow((altura / 100), 2)).toFixed(1);
    resultado.textContent = bmi;

    if (bmi < 18.5) {
        categoria = "Underweight";
        resultado.style.color = "#ffc44d"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        categoria = "Normal weight";
        resultado.style.color = "#0be881"
    } else if (bmi > 24.9 && bmi <= 29.9) {
        categoria = "Over height";
        resultado.style.color = "#ff884d"
    } else {
        categoria = "Obese";
        resultado.style.color = "#ff5e57"
    }
    document.getElementById("categoria").textContent = categoria;
}