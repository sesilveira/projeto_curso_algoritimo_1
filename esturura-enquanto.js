/*Var
// Seção de Declarações das variáveis 
// perguntar a idade e calcular se é maior de 18 anos
   nome: caractere
   idade, limite, contador: inteiro
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digitade a quantidade de vezes que vai ser verificada a idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite  faca
       escreva("Digite seu nome: ")
       leia(nome)
       escreva("Digite a idade: ")
       leia(idade)
       se idade > 18 entao
           escreval(nome, " é Maior de Idade")
       senao
           escreval(nome, " é Menor de Idade")
       fimse
       contador := contador + 1
   fimenquanto
   */
function acaoBotao() {

    var  idade, limite, contador
    limite = prompt("Digitade a quantidade de vezes que vai ser verificada a idade: ")
    contador = 0 
    while(contador < limite){
        nome = prompt("Digite seu nome: ")
        idade = prompt("Digite a idade: ")
        if ( idade > 18 ) {
            document.getElementById("paragrafo").innerText = nome + " é maior de idade"
        }
        else{
            document.getElementById("paragrafo").innerText = nome + " é menor de idade" 
        }
        contador++
    }
}
