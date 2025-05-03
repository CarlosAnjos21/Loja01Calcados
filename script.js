// Referência ao elemento da lista do carrinho (ul)
const listaCarrinho = document.getElementById("lista-carrinho");

// Referência ao botão de limpar o carrinho
const btnLimpar = document.getElementById("limpar-carrinho");

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
  const li = document.createElement("li"); // Cria novo item de lista
  // Insere o nome do produto e um botão "x" que remove o próprio item
  li.innerHTML = `${produto} <button class="btn-remover" onclick="this.parentElement.remove()">x</button>`;
  listaCarrinho.appendChild(li); // Adiciona o item à lista do carrinho
}

// Evento de clique para limpar todo o carrinho
btnLimpar.addEventListener("click", () => {
  listaCarrinho.innerHTML = ""; // Remove todos os itens da lista
});

// Evento de clique no botão de pagar
document.getElementById('pagar-carrinho').addEventListener('click', function() {
  const lista = document.getElementById('lista-carrinho'); // Obtém novamente a lista do carrinho
  if (lista.children.length === 0) {
    alert("Seu carrinho está vazio."); // Alerta se não há itens
  } else {
    alert("Compra confirmada! Obrigado pela preferência."); // Confirma a compra
    lista.innerHTML = ""; // Limpa a lista após a compra
  }
});

const menu = document.querySelector('.menu-lateral');

  document.addEventListener('mousemove', function (e) {
    if (e.clientX < 30) {
      // Se o mouse estiver nos 30px da borda esquerda
      menu.classList.add('ativo');
    } else if (e.clientX > 280) {
      // Se o mouse se afastar, oculta o menu
      menu.classList.remove('ativo');
    }
  });