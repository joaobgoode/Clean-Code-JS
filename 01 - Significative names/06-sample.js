const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const eAtivo = true;

function displayUsuario(nomeUsuario, idadeUsuario, eAtivo) {
  if (eAtivo) {
    console.log(`${nomeUsuario} tem ${idadeUsuario} anos e está ativo.`);
  } else {
    console.log(`${nomeUsuario} está inativo.`);
  }
}

displayUsuario(nomeUsuario, idadeUsuario, eAtivo);
