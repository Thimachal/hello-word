console.log("Váriaveis");

const listaDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`,
  `Maceió`
);
const idadePessoaComprador = 17;
const estaAcompanhada = true;
console.log("Destinos Liberados");
console.log(listaDestinos);

if (idadePessoaComprador >= 18) {
  console.log("Comprador Maior de Idade, pode vender!");
  listaDestinos.splice(0, 1); //deleta itens da lista
} else if (estaAcompanhada) {
  //fica true automático
  console.log("O acompanhate pode comprar a passagem");
} else {
  console.log("Comprador menor de idade, não pode comprar!");
}

console.log(listaDestinos);

//console.log(`Meu nome é ${nome} ${sobrenome}`);
