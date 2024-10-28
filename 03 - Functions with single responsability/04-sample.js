async function buscarPersonagemENave(idPersonagem) {
  try {
    const personagem = await fetchPersonagemData(idPersonagem);

    if (personagem.starships.length > 0) {
      const nave = await fetchNaveData(personagem.starships[0]);
      displayTamanhoNave(nave);
    } else {
      console.log(`${personagem.name} não possui naves registradas.`);
    }

  } catch (erro) {
    console.error("Erro ao buscar o personagem ou sua nave:", erro);
  }
}

async function fetchPersonagemData(idPersonagem) {
  const url = `https://swapi.dev/api/people/${idPersonagem}/`;
  const resposta = await fetch(url);
  validateResponse(resposta);
  return await parseJSON(resposta);
}

async function fetchNaveData(naveUrl) {
  const resposta = await fetch(naveUrl);
  validateResponse(resposta);
  return await parseJSON(resposta);
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
function getTripulacaoNave(nave) {
  return parseInt(nave.crew);
}

function isNavePequena(tripulacao) {
  const maxTripulacaoNavePequena = 100;
  return parseInt(tripulacao) > maxTripulacaoNavePequena;
}

function displayTamanhoNave(nave) {
  const tripulacao = getTripulacaoNave(nave);
  if (isNavePequena(tripulacao)) {
    console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
  } else {
    console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
  }
}

const idPersonagem = 1;

buscarPersonagemENave(idPersonagem);
