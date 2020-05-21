/*Algoritmo "concatenacao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2020
Var
// Seção de Declarações das variáveis
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome:")
   leia(nome)
   escreval("Digite o numero:")
   leia(numero)
   
   escreval(nome, " : ", numero)

Fimalgoritmo */

var nome,numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero
