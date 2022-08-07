class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia,
        this.numero = numero,
        this.tipo = tipo,
        this._saldo = saldo
    }
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = _saldo + valor
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada - sem saldo disponível!"
        }
        this._saldo = this._saldo - valor
        return `Novo saldo: ${this._saldo}`
    }
    depositar(valor){
        this._saldo = this._saldo + valor
        return `Novo saldo: ${this._saldo}`
    }
}