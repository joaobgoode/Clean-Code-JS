async function buscarEFiltrarPessoasPelaInicial(inicial) {
  try {
    const resposta = await fetch("https://swapi.dev/api/people/");
    const dados = await resposta.json();

    const pessoasComInicial = filtrarPessoasComInicial(dados, inicial);

    console.log(`Pessoas cujo nome começa com ${inicial}:`);

    displayPessoas(pessoasComInicial);
    console.log(`Total de pessoas encontradas: ${contarPessoas(pessoasComInicial)}`);

  } catch (erro) {
    console.error("Erro ao buscar pessoas:", erro);
  }
}

function filtrarPessoasComInicial(dados, inicial) {
  return dados.results.filter(pessoa => pessoa.name.startsWith(inicial));
}

function displayPessoas(pessoas) {
  pessoas.forEach(pessoa => {
    console.log(pessoa.name);
  });
}

function contarPessoas(pessoas) {
  return pessoas.length;
}

const inicial = "L";
buscarEFiltrarPessoasPelaInicial(inicial);
