let qtdVitorias = 10
let qtdDerrotas = 5

let saldoVitorias = calcularSaldoVitorias(qtdVitorias, qtdDerrotas)
let nivelHeroi = classificarNivel(saldoVitorias)

//--------------------- Mensagem de Saída ---------------------
console.log("O Herói tem de saldo de " +saldoVitorias +" vitórias e está no nível de " +nivelHeroi +".")

//--------------------- Declarações das Funções ---------------------

//Funcão para calcular o saldo de vitórias
function calcularSaldoVitorias(qtdVitorias, qtdDerrotas) {
    return (qtdVitorias - qtdDerrotas)
}

//Função para definir a classificação de acordo com o saldo de vitórias do herói
function classificarNivel(saldoVitorias) {
    switch(true) {
        case (saldoVitorias <= 10):
            return "Ferro"
        case (saldoVitorias >= 11 && saldoVitorias <= 20):
            return "Bronze"
        case (saldoVitorias >= 21 && saldoVitorias <= 50):
            return "Prata"
        case (saldoVitorias >= 51 && saldoVitorias <= 80):
            return "Ouro"
        case (saldoVitorias >= 81 && saldoVitorias <= 90):
            return "Diamante"
        case (saldoVitorias >= 91 && saldoVitorias <= 100):
            return "Lendário"
        default:
            return "Inválido"
    }
}