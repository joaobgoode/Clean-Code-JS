class Gestor {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
const nome = "Lucas";
const idade = 40;
const pessoa = new Gestor(nome, idade);
console.log(pessoa);
