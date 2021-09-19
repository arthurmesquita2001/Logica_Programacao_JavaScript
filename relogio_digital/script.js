var horas = document.getElementById("hora");
var minutos = document.getElementById("minuto");
var segundos = document.getElementById("segundo");

var relogio = setInterval(
    function tempo() {
        var data = new Date();
        var h = data.getHours();
        var m = data.getMinutes();
        var s = data.getSeconds();

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        horas.textContent = h;
        minutos.textContent = m;
        segundos.textContent = s;



    }
)