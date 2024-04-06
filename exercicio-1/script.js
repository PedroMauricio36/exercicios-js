function calcularAnoNascimento() {
    let anoAtual = parseInt(document.getElementById("anoAtual").value);
    let idade = parseInt(document.getElementById("idade").value);
    
    let anoNascimento = anoAtual - idade;
    
    document.getElementById("resultado").innerHTML = "Você nasceu em " + anoNascimento + ".";
}