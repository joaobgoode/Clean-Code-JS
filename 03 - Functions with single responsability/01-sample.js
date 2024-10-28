async function buscarEDetalharNave(number) {
  try {
    const resposta = await fetchNaveData(number);
    const nave = await parseJSON(resposta);
    displayNave(nave);
    displayTamanhoNave(nave);
  } catch (erro) {
    console.error("Erro ao buscar detalhes da nave:", erro);
  }
}

async function fetchNaveData(number) {
  const url = `https://swapi.dev/api/starships/${number}/`;
  const resposta = await fetch(url);
  validateResponse(resposta);
  return resposta;
}

function validateResponse(resposta) {
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

function getStringNave(nave) {
  const detalhesNave = `
    Nome: ${nave.name}
    Modelo: ${nave.model}
    Fabricante: ${nave.manufacturer}
    `;
  return detalhesNave;
}

function displayNave(nave) {
  const detalhesNave = getStringNave(nave);
  console.log("Detalhes da Nave:");
  console.log(detalhesNave);
}

function getTamanhoTripulacao(nave) {
  return parseInt(nave.crew);
}

function isNavePequena(nave) {
  const maxTripulacaoNavePequena = 100;
  return getTamanhoTripulacao(nave) > maxTripulacaoNavePequena;
}

function displayTamanhoNave(nave) {
  if (isNavePequena(nave)) {
    console.log("Esta é uma nave pequena.");
  } else {
    console.log("Esta é uma nave grande.");
  }
}
const numeroNave = 9;
buscarEDetalharNave(numeroNave);
