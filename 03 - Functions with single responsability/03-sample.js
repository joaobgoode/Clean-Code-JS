async function buscarEDetalharPlaneta(idPlaneta) {
  try {
    const resposta = await fetchPlanetaData(idPlaneta);
    const planeta = await parseJSON(resposta);
    displayPlaneta(planeta);
    displayPopulacaoPlaneta(planeta);
  } catch (erro) {
    console.error("Erro ao buscar o planeta:", erro);
  }
}

async function fetchPlanetaData(idPlaneta) {
  const url = `https://swapi.dev/api/planets/${idPlaneta}/`;
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
    throw new Error("Erro ao tentar converter JSON", erro);
  }
}

function getPopulacaoPlaneta(planeta) {
  return parseInt(planeta.population);
}

function isPlanetaPopuloso(planeta) {
  const populacaoMinimaPlanetaPopuloso = 1000000;
  return getPopulacaoPlaneta(planeta) > populacaoMinimaPlanetaPopuloso;
}

function displayPopulacaoPlaneta(planeta) {
  if (isPlanetaPopuloso(planeta)) {
    console.log("Este planeta é muito populado.");
  } else {
    console.log("Este planeta tem uma população pequena.");
  }
}

function stringPlaneta(planeta) {
  const detalhesPlaneta = `
    Nome: ${planeta.name}
    Clima: ${planeta.climate}
    População: ${planeta.population}
    `;
  return detalhesPlaneta;
}

function displayPlaneta(planeta) {
  const detalhesPlaneta = stringPlaneta(planeta);
  console.log("Detalhes do Planeta:");
  console.log(detalhesPlaneta);
}

const idPlaneta = 1;
buscarEDetalharPlaneta(idPlaneta);
