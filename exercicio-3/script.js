function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("primeiraNota").value);
    let nota2 = parseFloat(document.getElementById("segundaNota").value);
    let nota3 = parseFloat(document.getElementById("terceiraNota").value);
    let nota4 = parseFloat(document.getElementById("quartaNota").value);
    let calculo = (nota1 + nota2 + nota3 + nota4) / 4;
    
    document.getElementById("resultado").innerHTML = " A média do aluno é de:  " + calculo + ".";

    if (calculo>=5) { 
        document.getElementById("resultadoPlus").innerHTML = "Aprovado! Parabéns!";
    } else {
        document.getElementById("resultadoPlus").innerHTML = " Reprovado. Estude Mais!!!";
    }
}