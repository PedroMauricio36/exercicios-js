function numeroMaior() {
    let n1 = parseInt(document.getElementById("primeiroNumero").value);
    let n2 = parseInt(document.getElementById("segundoNumero").value);
    let n3 = parseInt(document.getElementById("terceiroNumero").value);

    if (n1<n2 && n1<n3) {
        document.getElementById("resultado").innerHTML = `Compre o primeiro produto.`;
    } else if (n2<n3) {
        document.getElementById("resultado").innerHTML = `Compre o segundo produto.`;
    } else {
        document.getElementById("resultado").innerHTML = `Compre o terceiro produto.`;
    }
}

// Alternativa B