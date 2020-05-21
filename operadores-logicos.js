var nome, nota01, nota02, media, passou;

passou = false;

nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a nota 01")
nota02 = prompt("Digite a nota 02")


media = (parseInt(nota01) + parseInt(nota02)) / 2

if (media >=50){
    passou = true;
}

if (passou) && (media >= 70 && media<=90){ //disjunçao exclusiva
    alert("Aprovado" + nome)
else
    alert("Reprovado" + nome)
}