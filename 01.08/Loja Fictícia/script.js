document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        { nome: "Camiseta Branca", preco: 29.9, categoria: "camiseta" },
        { nome: "Camiseta Preta", preco: 34.9, categoria: "camiseta" },
        { nome: "Boné Azul", preco: 19.9, categoria: "acessorio" },
        { nome: "Pulseira", preco: 15.5, categoria: "acessorio" },
        { nome: "Camiseta Vermelha", preco: 39.9, categoria: "camiseta" },
        { nome: "Óculos de Sol", preco: 59.9, categoria: "acessorio" }
    ];
    let carrinho = [];
    const produtosEl = document.getElementById("produtos");
    const itensCarrinhoEl = document.getElementById("itens-carrinho"); 
    const totalEl = document.getElementById("total");
    const filtroEl = document.getElementById("categoria-filtro");
    const fecharCarrinhoBtn = document.getElementById("fechar-carrinho");
    const mensagemFinalEl = document.getElementById("mensagem-final");

    function exibirProdutos(filtrados = produtos) {
        produtosEl.innerHTML = '';
        filtrados.forEach(prod => {
            const div = document.createElement("div");
            div.className = "produto"; 
            div.innerHTML = `
                <h3>${prod.nome}</h3>
                <p>R$ ${prod.preco.toFixed(2)}</p>
                <button>Adicionar</button>
            `;
            const btn = div.querySelector('button');
            btn.addEventListener('click', () => adicionarAoCarrinho(prod.nome, prod.preco)); // Usando addEventListener
            produtosEl.appendChild(div);
        });
    }

    function adicionarAoCarrinho(nome, preco) {
        carrinho.push({ nome, preco });
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        itensCarrinhoEl.innerHTML = '';
        let total = 0;
        carrinho.forEach(item => {
            total += item.preco;
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            itensCarrinhoEl.appendChild(li);
        });
        totalEl.textContent = total.toFixed(2);
    }

    filtroEl.addEventListener("change", () => {
        const categoria = filtroEl.value;
        const filtrados = categoria === "todas" ? produtos : produtos.filter(p => p.categoria === categoria);
        exibirProdutos(filtrados);
    });

    fecharCarrinhoBtn.addEventListener('click', () => {
        carrinho = [];
        atualizarCarrinho();
        mensagemFinalEl.hidden = false;
        setTimeout(() => {
            mensagemFinalEl.hidden = true;
        }, 3000);
    });

    exibirProdutos();
});