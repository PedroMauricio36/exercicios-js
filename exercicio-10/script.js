function diaDaSemana() {
    let numero = parseInt(document.getElementById("numero").value);

    if (numero==1) {
        document.getElementById("resultado").innerHTML = `Hoje é Domingo `;
    } else if (numero==2) {
        document.getElementById("resultado").innerHTML = `Hoje é Segunda `;
    } else if (numero==3) {
        document.getElementById("resultado").innerHTML = `Hoje é Terça `;
    } else if (numero==4) {
        document.getElementById("resultado").innerHTML = `Hoje é Quarta`;
    } else if (numero==5) {
        document.getElementById("resultado").innerHTML = `Hoje é Quinta`;
    } else if (numero==6) {
        document.getElementById("resultado").innerHTML = `Hoje é Sexta`;
    } else if (numero==7) {
        document.getElementById("resultado").innerHTML = `Hoje é Sábado `;
    } else {
        document.getElementById("resultado").innerHTML = `ERRO NUMERO INVALIDO`;
    }
}