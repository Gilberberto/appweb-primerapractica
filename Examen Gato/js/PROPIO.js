var opt = 3;
var turno = "o";
var xpunt=0;
var opunt=0;


$(".B1").click(function () {
    $(this).val(turno);
    $(this).removeClass("btn-dark");
    $(this).addClass("btn-dark");
    revisar();
    turno = (turno == "o") ? "x" : "o";
});

function revisar() {
    for (i = 1; i <= opt; i++) {
        for (j = 1; j <= opt; j++) {
            fila = i;
            columna = j;

            Cfilas = 1;
            Ccolumnas = 1;
            Cdiagonal = 1;
            CdiagonalInversa = 1;
            Cturnos = 0;

            $(".B1").each(function (index) {
                IdB1 = $(this).attr('id');

                if ((IdB1.charAt(0) == fila) && ($(this).val() == turno)) {
                    Cfilas++;
                    if (Cfilas == (opt + 1)) {
                        campeon();
                    }
                }

                if ((IdB1.charAt(1) == columna) && ($(this).val() == turno)) {
                    Ccolumnas++;
                    if (Ccolumnas == (opt + 1)) {
                        campeon();
                    }
                }
                if ((IdB1.charAt(1) == IdB1.charAt(0)) && ($(this).val() == turno)) {
                    Cdiagonal++;
                    if (Cdiagonal == (opt + 1)) {
                        campeon();
                    }
                }
                valorTotaldiagonal = parseInt(IdB1.charAt(1)) + parseInt(IdB1.charAt(0));
                if (((valorTotaldiagonal) == (opt + 1)) && ($(this).val() == turno)) {
                    CdiagonalInversa++;
                    if (CdiagonalInversa == (opt + 1)) {
                        campeon();
                    }
                }
                if ($(this).val() != "-") {
                    Cturnos++;
                    if (Cturnos == (opt * opt)) {
                        TerminarJuego();
                    }
                }
            });
        }
    }
}

function TerminarJuego() {
    $("#alertMensaje").html("Juego terminado");
    $(".alert").show('slow');
    $("#iniciar").removeClass("disabled");
}

function Reiniciar() {
    $(".alert").hide('slow');
    Cfilas = 1;
    Ccolumnas = 1;
    Cdiagonal = 1;
    CdiagonalInversa = 1;
    Cturnos = 0;
    $(".B1").each(function (index) {
        $(this).val('-');
    });
    $("#iniciar").addClass("disabled");
    $(".B1").removeClass("btn-danger");
    $(".B1").addClass("btn-primary");
}

function campeon() {
    $("#alertMensaje").html('Ganador <strong><input id="camp" class="ganador btn btn-dark btn-lg" type="button" value="' + turno + '"></strong>');
    $(".alert").show('slow');
    $("#iniciar").removeClass("disabled");
}

function cerrarAlert() {
    $(".alert").hide('slow');
    $("#iniciar").removeClass("disabled");
    Reiniciar();
}

