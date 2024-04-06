function tipoTriangulo() {
    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);

    // Triângulo Equilátero: três lados iguais;
    // Triângulo Isósceles: quaisquer dois lados iguais;
    // Triângulo Escaleno: três lados diferentes;

    if (lado1 == lado2 && lado2 == lado3) {
        document.getElementById("resultado").innerHTML = `Triângulo Equilátero: três lados iguais`;
    } else if (lado1 != lado2 && lado2 != lado3) {
        if (lado1 != lado3) {
            document.getElementById("resultado").innerHTML = `Triângulo Escaleno: três lados diferentes`;
        }
    } else {
        document.getElementById("resultado").innerHTML = `Triângulo Isósceles: quaisquer dois lados iguais`;
    }
}