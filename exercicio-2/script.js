function calcularCentimetros() {
    let metro = (document.getElementById("metros").value);
    let calculo = metro * 100;
    
    document.getElementById("resultado").innerHTML = `${parseFloat(metro)} metros é igual a ${parseFloat(calculo)} centímetros.`;

    if (metro == 1) {
        document.getElementById("resultado").innerHTML = `${parseFloat(metro)} metro é igual a ${parseFloat(calculo)} centímetros.`;
    }
}