/*   escreval("Digite o nome do aluno")
   leia(nome)
   escreval("Digite a nota 01")
   leia(nota01)
   escreval("Digite a nota 02")
   leia(nota02)
   
   media := (nota01 + nota02) / 2

   se media >= 5 entao
       escreval("Aprovado ", nome)
   senao
        escreval("reprovado ", nome)
   fimse */


   var nome, nota01, nota02, media;
   nome = prompt("Digite o nome do aluno")
   nota01 = prompt("Digite a nota 01")
   nota02 = prompt("Digite a nota 02")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if (media >= 50){
        alert("Aprovado " + nome)
   }
   else{
        alert("Reprovado ", + nome) 
   }
