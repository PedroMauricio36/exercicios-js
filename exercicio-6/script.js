function calcularSalario() {
    let salarioAtual = parseFloat(document.getElementById("salario").value);
    
    if (salarioAtual < 500) {

        salarioAtual = salarioAtual * 1.15; // Ajuste de 15%

        document.getElementById("resultado").innerHTML = `Reajuste de 15% totalizando: R$ ${parseInt(salarioAtual)}.`;

    } else if (salarioAtual >= 500 && salarioAtual <= 1000) {

        salarioAtual = salarioAtual * 1.10; // Ajuste de 10%

        document.getElementById("resultado").innerHTML = `Reajuste de 10% totalizando: R$ ${parseInt(salarioAtual)}.`;

    } else {

        salarioAtual = salarioAtual * 1.05; // Ajuste de 5%

        document.getElementById("resultado").innerHTML = `Reajuste de 5% totalizando: R$ ${parseInt(salarioAtual)}.`;

    }
}