//Objetivo 1:
// Passo 1 - pegar o botao de selecao de plataformas no Js pra poder verificar quando o usuario clicar em cima dele
const botao = document.querySelector(".btn-plataforma");
//Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".plataformas");
console.log("Botao antes");
console.log(elementoPlataformas);
//Passo 3 - pegar o clique do usuario (o addEventListener serve como se fosse adicionada uma açao a um evento e/ou elemento) nesse caso quando o evento "botao clicado" representado pela função da seta  () => , a classe "ativo" devra ser adicionada ao elemento plataformas no passo seguinte
botao.addEventListener("click", () => {
    

    //Objetivo 2 - Caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar em cima do botao, o conteudo deve ser escondido
   //Passo 1 - verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente 
   //(para verificar um conteudo usar a condicao If, e na representacao de classes o contains vai verificar se contem a classe ativo)
  
   const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
   //se if o botao esta aberto, fechar, else caso contrario abir
   if(botaoEstaAberto) {
    elementoPlataformas.classList.remove("ativo")
  }else{
    

   //Passo 4 do objetivo 1 e passo 2 do objetivo 2
   //- Quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao para que o conteudo apareça
   elementoPlataformas.classList.add("ativo");
   console.log("Botao depois q clica");
   console.log(elementoPlataformas);}

   //para refatorar o codigo, podera apagar as ultimas linhas de codigo do if ao else transformando-as em comentarios, e exemplificando essas em :
   // elementoPlataformas.classList.toggle("ativo");
   //e excluir a linha 16, ja que nao sera mais necessaria
});

   