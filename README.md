# SIstema com Mock Object

Exemplo de página web que exibe produtos utilizando um banco de dados mockado com JSON, você pode seguir os passos abaixo. Vamos criar uma estrutura simples com HTML, CSS e JavaScript, e utilizar um arquivo JSON para simular o banco de dados dos produtos.

### Estrutura do Projeto

#### Primeiro, crie a estrutura do projeto:

````diff
/projeto
│
├── index.html
├── produtos.json
├── /assets
├───── /css
├──────── style.css
├───── /js
└──────── script.js

````

#### Arquivo produtos.json

Este arquivo conterá os dados dos produtos. Aqui está um exemplo de como os dados mockados pode ser estruturado:

````json
[
    {
        "id": 1,
        "nome": "Produto 1",
        "descricao": "Descrição do Produto 1",
        "preco": 100.00,
        "imagem": "https://via.placeholder.com/150"
    },
    {
        "id": 1,
        "nome": "Produto 2",
        "descricao": "Descrição do Produto 2",
        "preco": 100.00,
        "imagem": "https://via.placeholder.com/150"
    }
]
````

#### Arquivo script.js

Este arquivo conterá o código JavaScript para carregar os produtos do arquivo JSON e exibi-los na página:

````js
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
````

#### Arquivo index.html

Este arquivo conterá a estrutura básica da página e o local onde os produtos serão exibidos:

````html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h1>Exemplo de dados Mockados(MOCK dados) </h1>
    <h2>Lista de Produtos</h2>
    <div id="produtos-container" class="produtos-container">
        <!-- Os produtos serão inseridos aqui via JavaScript -->
    </div>

    <script src="assets/js/script.js"></script>
</body>
</html>
````

#### Arquivo style.css

Este arquivo conterá o estilo básico para a página:

````css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1 {
    text-align: center;
    color: #333;
}

.produtos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.produto {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    width: 200px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.produto img {
    max-width: 100%;
    border-radius: 5px;
}

.produto h2 {
    font-size: 1.2em;
    margin: 10px 0;
}

.produto p {
    color: #666;
    font-size: 0.9em;
}

.produto .preco {
    color: #333;
    font-size: 1.2em;
    font-weight: bold;
}
````

### Resultado

A página exibirá os produtos carregados do arquivo produtos.json, com uma imagem, nome, descrição e preço para cada produto. Demonstrando um exemplo básico de como criar uma página web que exibe produtos utilizando um banco de dados mockado com JSON. Você pode expandir este projeto adicionando mais funcionalidades, como filtros, paginação, ou até mesmo integrando com um backend real para gerenciar os produtos.

### Licença

Copyright (c) 2025 Anália Souza

Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar no Software sem restrição, incluindo sem limitação os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e para permitir que as pessoas a quem o Software é fornecido o façam, desde que as condições a seguir sejam atendidas:

A notificação de copyright acima e esta permissão devem ser incluídas em todas as cópias ou partes substanciais do Software.