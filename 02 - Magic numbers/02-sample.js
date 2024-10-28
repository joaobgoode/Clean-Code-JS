function verificarSePodeDirigir(idade) {
  const idadeMinima = 18;
  if (idade >= idadeMinima) {
    return "Pode dirigir";
  } else {
    return "Não pode dirigir";
  }
}
const idade = 18;
console.log(verificarSePodeDirigir(idade));
