function calcularFrete(distancia) {
  const valorBase = 10;
  return distancia * valorBase;
}

const distancia = 50;
const frete = calcularFrete(distancia);
console.log(`O valor do frete é: ${frete}`);
