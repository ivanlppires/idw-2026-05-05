/* EVENTOS EM JAVASCRIPT */

/*
    document => Acessa os elementos da DOM (Document Object Model)
    window = > Acessa os elementos da janela do navegador BOM (Browser Object Model)
*/

// 1. Como eu acesso um elemento html
const botao1 = document.querySelector("#mensagem");
const botao2 = document.querySelector("#imprimir");
/*
    document.getElements.byTagName // retorna um vetor dos elementos do tipo especificado
    document.getElements.byClassName // retorna um vetor dos elementos com a classe especificada
    document.getElementById // retorna o elemento com o id especificado
    document.querySelector // retorna o primeiro elemento que corresponde ao seletor css especificado
    document.querySelectorAll // retorna um vetor de elementos que correspondem ao seletor css especificado

    Os seletores podem ser id # ou classe . ou tag name
*/

// 2. Como eu adiciono um evento a um elemento html
botao1.addEventListener("click", () => {
    window.alert("Olá mundo!");
})

botao2.addEventListener("click", () => {
    window.print();
});
