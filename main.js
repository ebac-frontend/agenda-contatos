const form = document.getElementById('form-agenda');
let contatos = [];  // Lista para armazenar contatos

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
});

function adicionaContato() {
    const inputNomeDoContato = document.getElementById('nome');
    const inputNumeroDoContato = document.getElementById('telefone');

    if (contatos.some(contato => contato.nome === inputNomeDoContato.value)) {
        alert(`O nome: ${inputNomeDoContato.value} já foi inserido.`);
    } else {
        contatos.push({
            nome: inputNomeDoContato.value,
            telefone: inputNumeroDoContato.value
        });

        inputNomeDoContato.value = '';
        inputNumeroDoContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';  // Limpa a tabela

    contatos.forEach(contato => {
        let linha = '<tr>';
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.telefone}</td>`;
        linha += '</tr>';
        corpoTabela.innerHTML += linha;
    });
}