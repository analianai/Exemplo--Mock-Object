document.addEventListener('DOMContentLoaded', function() {
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            produtos.forEach(produto => {
                const produtoElement = document.createElement('div');
                produtoElement.classList.add('produto');

                const imagem = document.createElement('img');
                imagem.src = produto.imagem;
                imagem.alt = produto.nome;

                const nome = document.createElement('h2');
                nome.textContent = produto.nome;

                const descricao = document.createElement('p');
                descricao.textContent = produto.descricao;

                const preco = document.createElement('p');
                preco.classList.add('preco');
                preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

                produtoElement.appendChild(imagem);
                produtoElement.appendChild(nome);
                produtoElement.appendChild(descricao);
                produtoElement.appendChild(preco);

                container.appendChild(produtoElement);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});