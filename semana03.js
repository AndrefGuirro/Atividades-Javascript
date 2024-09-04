var produtos = []; // Cria um array para armazenar os produtos

function adicionarProduto() {
    var nomeProduto = document.getElementById("nomeProduto").value.trim(); // Captura o nome do produto

    if (nomeProduto !== "") {
        produtos.push(nomeProduto); // Adiciona o produto ao array
        produtos.sort(); // Ordena o array em ordem alfabética

        // Limpa o campo de entrada
        document.getElementById("nomeProduto").value = "";

        // Atualiza a lista de produtos no HTML
        atualizarListaProdutos();
    }
}

function atualizarListaProdutos() {
    var listaProdutos = document.getElementById("listaProdutos");
    listaProdutos.innerHTML = ""; // Limpa a lista existente

    // Adiciona cada produto como um item na lista ordenada
    produtos.forEach(function(produto) {
        var li = document.createElement("li"); // Cria um elemento <li>
        li.className = "list-group-item"; // Define a classe Bootstrap
        li.textContent = produto; // Define o texto do item
        listaProdutos.appendChild(li); // Adiciona o item à lista
    });
}
