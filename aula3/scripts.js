function parametros(valor1, valor2){
    let soma = valor1 + valor2;
    if (valor1 == valor2){
        alert("Os valores são iguais");
    } else {
        alert("Os valores são diferentes");
    }

    if (soma >10 && soma<20){
        alert(`A soma dos dois valores é maior que 10 e menor que 20. A soma é ${soma}`);
    } else if (soma <10){
        alert(`A soma dos dois valores é menor que 10 . A soma é ${soma}`);
    } else if (soma >20){
        alert(`A soma dos dois valores é maior que 20 . A soma é ${soma}`);
    }
    
}

var valor1 = Number(prompt("Insira um valor"));
var valor2 = Number(prompt("Insira outro valor"));

parametros(valor1, valor2)