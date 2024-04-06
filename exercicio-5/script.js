function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = (peso / (altura * altura));

    document.getElementById("resultado").innerHTML = `Seu IMC é de: ${parseInt(imc)}.`;
    
    if (imc<18.5) {
        document.getElementById("resultadoPlus").innerHTML = " Abaixo do Peso. ";
    } 
    else if (imc<25) {
        if (imc>18.5) {
            document.getElementById("resultadoPlus").innerHTML = " Peso Ideal. ";
        }
    }
    else if (imc<30) {
        if (imc>25) {
            document.getElementById("resultadoPlus").innerHTML = " Levemente Acima do Peso. ";
        }
    }
    else if (imc<35) {
        if (imc>30) {
            document.getElementById("resultadoPlus").innerHTML = " Obesidade Grau I. ";
        }
    }
    else if (imc<40) {
        if (imc>35) {
            document.getElementById("resultadoPlus").innerHTML = " Obesidade Grau II (Severa)";
        }
    } else {
        document.getElementById("resultadoPlus").innerHTML = " Vai morrer hein..."; 
    }
}