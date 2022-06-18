//solucao1
function palindromo1(string){
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

palindromo1("ovo");