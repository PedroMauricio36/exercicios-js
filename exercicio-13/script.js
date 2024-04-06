function sequenciaFibonacci() {
    let n1 = parseInt(document.getElementById("sequencia").value);
    let numeroAtual = 0;
    let numeroAnterior = 0;
    let numeroUltimo = 1;

    // 1,1,2,3,5,8,13,21,34,55

    for(let i=0; i<n1; i++) {

       numeroAtual = numeroUltimo + numeroAnterior;
       numeroAnterior = numeroUltimo;
       numeroUltimo = numeroAtual;

    }
    document.getElementById("resultado").innerHTML = `O ${n1}º da sequencia Fibonacci é o ${numeroAtual}.`;
}
