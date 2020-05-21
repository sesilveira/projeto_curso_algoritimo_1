/*Var
// Seção de Declarações das variáveis
// vamos calcular Fatorial https://pt.wikipedia.org/wiki/Fatorial

   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o numero para calcular o fatorial")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva("O fatorial de ", numero, "é ", fatorial) */

   

   function acaoBotao(params) {
       var numero, fatorial
       numero = prompt("Digite o numero para calcular o fatorial") 
       fatorial = 1
       for (contador = 1; contador <= numero; contador++) { //contador++ vai somar valor do contador + 1
           fatorial = fatorial * contador
           
       }
1          
        document.getElementById("paragrafo").innerText = "O fatorial de " + numero + "é " + fatorial
   
   
   }  