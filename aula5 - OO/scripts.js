class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this._tipo = tipo;
        this._saldo = 0
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }


    sacar(valor){
        if (this._saldo < valor){
            return `Saque não realizado, o valor de saque é maior que o disponível na conta.`
        }
        this._saldo = this._saldo - valor;
        return `Valor de ${valor} sacado na conta!`;
        
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return `Valor de ${valor} depositado na conta!`;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
       super(agencia, numero);
       this._cartaoCredito = cartaoCredito;
       this._tipo = "Conta Corrente";
       this._saldo = 0;
    }

    get _cartaoCredito(){
        return this._cartaoCredito;
    }

    set _cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this._tipo = "Conta Universitária";
        this._saldo = 0;
        }
    
    
    sacar(valor){
        if (this._saldo < valor){
            return `Saque não realizado, o valor de saque é maior que o disponível na conta.`;
        } else if (valor > 500){
            return "Saque não realizado. O seu limite de saque é 500 reais.";
        }
        this._saldo = this._saldo - valor;
        return `Valor de ${valor} sacado na conta!`;
        
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this._tipo = "Conta Poupança";
        this._saldo = 0;
    }
}