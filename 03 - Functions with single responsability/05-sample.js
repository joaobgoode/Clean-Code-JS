async function buscarVeiculosECalcularCusto() {
  try {
    const dados = await fetchVeiculosData();
    const limiteCusto = 10000;
    const veiculosCaros = filtrarVeiculosCaros(dados.results, limiteCusto);

    console.log("Veículos caros (mais de 10.000 créditos):");
    veiculosCaros.forEach(veiculo => {
      console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
    });

    const custoTotal = calcularCustoTotal(veiculosCaros);
    console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

  } catch (erro) {
    console.error("Erro ao buscar veículos:", erro);
  }
}

async function fetchVeiculosData() {
  const url = "https://swapi.dev/api/vehicles/";
  const resposta = await fetch(url);
  validarResposta(resposta);
  return await parseJSON(resposta);
}

function filtrarVeiculosCaros(veiculos, limiteCusto) {
  return veiculos.filter(veiculo => parseInt(veiculo.cost_in_credits) > limiteCusto);
}

function calcularCustoTotal(veiculos) {
  return veiculos.reduce((total, veiculo) => {
    return total + parseInt(veiculo.cost_in_credits);
  }, 0);
}

function validarResposta(resposta) {
  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
  }
}

async function parseJSON(resposta) {
  try {
    return await resposta.json();
  } catch (erro) {
    throw new Error("Erro ao converter JSON", erro);
  }
}

buscarVeiculosECalcularCusto();
