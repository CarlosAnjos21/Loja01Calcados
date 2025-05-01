function adicionarAoCarrinho(produto) {
    const lista = document.getElementById("lista-carrinho");
    const item = document.createElement("li");
    item.textContent = produto;
    lista.appendChild(item);
  }