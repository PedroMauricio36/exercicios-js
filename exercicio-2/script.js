function calcularCentimetros() {
    let metro = (document.getElementById("metros").value);
    
    let calculo = metro * 100;
    
    document.getElementById("resultado").innerHTML = metro + " metros é igual a " + calculo + " centímetros.";
}