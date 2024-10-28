function realizarPedido(idDoProduto, quantidade) {
  const produto = getProdutoById(idDoProduto); //ok
  if (!produto) {
    return "Produto não encontrado";
  }

  //calculando valor
  const valorTotal = calcularValorTotal(produto.valor * quantidade);
  //criacao do pedido
  const pedido = criarPedido(idDoProduto, valorTotal, quantidade);
  const response = salvarNoBanco(pedido);

  const validacao = validarPedido(response);
  return validacao;
}
const ID_DO_PRODUTO = 1;
const QUANTIDADE = 2;
realizarPedido(ID_DO_PRODUTO, QUANTIDADE);


function salvarNoBanco(pedido) {
  return pedido;
}

function getProdutoById(idDoProduto) {
  const produtoMockado = {
    nome: "Produto Mockado",
    id: idDoProduto,
    valor: 100,
    tipo: "Produto"
  };
  return produtoMockado;
}

function validarPedido(response) {
  if (response) {
    return "Pedido realizado com sucesso";
  }
  return "Erro ao realizar pedido";
}

function criarPedido(idDoProduto, quantidade, valorTotal) {
  const pedido = {
    idDoProduto,
    valorTotal,
    id: 36437254524, //criacao do id
    quantidade
  };
  return pedido;
}

function calcularValorTotal(produto, quantidade) {
  const frete = 10;
  const valorTotal = (produto.valor * quantidade) + frete;
  return valorTotal;
}
