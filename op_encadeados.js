console.log("Váriaveis");

const listaDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`,
  `Maceió`
);
const idadePessoaComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos Liberados");
console.log(listaDestinos);

if (idadePessoaComprador >= 18 || estaAcompanhada) {
  console.log("Pode comprar, boa viagem!");
  listaDestinos.splice(0, 1); //deleta itens da lista
} else {
  console.log("Comprador menor de idade, não pode comprar!");
}

console.log("Embarque: \n\n");

if (idadePessoaComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem!!");
} else {
  console.log("Você não pode embarcar, sorry!");
}

console.log(listaDestinos);

//console.log(`Meu nome é ${nome} ${sobrenome}`);
