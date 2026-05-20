/* EVENTOS NO FORMULARIO PARA SALVAR EM LOCAL STORAGE */


const btnSalvar = document.querySelector("#salvar");

/* NÓS VAMOS SALVAR NO VETOR */
// Vetor armazena vários produtos  (array) - neste exemplo é produto.
// pra inserir no vetor é push
// posso acessar pelo índice,
// ex: produtos[0] - primeiro produto
// produtos[1] - segundo produto
// produtos[2] - terceiro produto
// e assim por diante

// [] é um vetor em javascript
const produtos = []; // vetor produtos
const produto = document.querySelector("#produto") // busca o elemento

btnSalvar.addEventListener("click", ()=> {
    const nomeProduto = produto.value; // pega o valor do elemento (o que a pessa digitou)
    produtos.push(nomeProduto); // adiciona o produto ao vetor
    produto.value = ""; // limpa o campo de texto
    mostraProdutos(); // chama a função para exibir os produtos
});

const lista = document.querySelector("#lista"); // elemento onde a lista de produtos será exibida
const mostraProdutos = () => {
    lista.innerHTML = ""; // limpa a lista antes de exibir os produtos
    for(let item of produtos){
        lista.innerHTML += '<p> - ' + item + '</p>'; // adiciona cada produto como um parágrafo na lista
    }
}