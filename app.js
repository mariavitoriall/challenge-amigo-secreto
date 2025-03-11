let listaDeNomes = [];

function adicionarAmigo() {
    // Captura o valor do input
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); //remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaDeNomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    listaDeNomes.push(nome);

    inputNome.value = "";

    atualizarLista();
}

function atualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");

    listaHTML.innerHTML = "";

    listaDeNomes.forEach(nome => {
        let item = document.createElement("li"); //cria um <li>
        item.textContent = nome;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);

    let nomeSorteado = listaDeNomes[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong>!</li>`;
}

