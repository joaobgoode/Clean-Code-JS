function calcularDesconto(preco) {
  const desconto = 0.15;
  return preco - (preco * desconto);
}
const preco = 100;
const precoFinal = calcularDesconto(preco);
console.log(`Preço com desconto: ${precoFinal}`);
