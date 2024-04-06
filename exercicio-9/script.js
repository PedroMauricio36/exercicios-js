function numeroMaior() {
    let n1 = parseInt(document.getElementById("primeiroNumero").value);
    let n2 = parseInt(document.getElementById("segundoNumero").value);
    let n3 = parseInt(document.getElementById("terceiroNumero").value);
    let numeros = [n1, n2, n3];
    let maiorNumero = 0;
    let menorNumero = 0;


    for(let i=0; i<numeros.length; i++) {
        if(numeros[i]>maiorNumero || i==0) {
            maiorNumero=numeros[i];
        } 
        // if(menorNumero==0) {
        //     menorNumero=numeros[i];
        // } 
        if(numeros[i]<menorNumero || i==0) {
            menorNumero=numeros[i];
        }

    }
    document.getElementById("resultado").innerHTML = `O maior número é o: ${maiorNumero}.`;
}