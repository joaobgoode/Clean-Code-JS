const pessoa = { nome: "Maria", idade: 28 };

function eMaiorDeIdade(pessoa) {
  const idadeMinima = 18;
  return pessoa.idade >= idadeMinima;
}

console.log(eMaiorDeIdade(pessoa));
