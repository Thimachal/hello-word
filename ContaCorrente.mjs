export class ContaCorrente {
  agencia;
  cliente;
  
  _saldo = 0;

  sacar(saque) {
    if (this._saldo <= saque) return;
    this._saldo -= saque;
  }

  depositar(deposito) {
    if (deposito < 0) return; //if com um comando pode fazer sem as chaves. Aqui ele não retorna nada, é só uma convenção da linguagem de verificação
    this._saldo += deposito;
  }
  tranferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
