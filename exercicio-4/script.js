
function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("primeiraNota").value);
    let nota2 = parseFloat(document.getElementById("segundaNota").value);
    let nota3 = parseFloat(document.getElementById("terceiraNota").value);

    let peso1 = nota1 * 2;
    let peso2 = nota2 * 4;
    let peso3 = nota3 * 6;

    let media = 2 + 4 + 6;

    let resultado = (peso1 + peso2 + peso3) / media;
    
    document.getElementById("resultado").innerHTML = " A média do aluno é de:  " + resultado + ".";
}