let vitoria = prompt("digite o número de vitorias")

let derrota = prompt("Digite o numero de derrotas")

let saldoVitorias = calcularSaldo(vitoria , derrota)

let nivel = ""


function calcularSaldo(vitoria , derrota){
  let calculo = vitoria - derrota
  return calculo
  }

switch(true){
  case saldoVitorias <= 10:
    nivel = "ferro"
    break
    
  case saldoVitorias <= 20:
    nivel = "bronze"
    break
    
  case saldoVitorias <= 50:
    nivel = "Prata"
    break
  case saldoVitorias <= 80:
    nivel = "Ouro"
    break
  case saldoVitorias <= 90:
    nivel = "Diamanate"
    break
  case saldoVitorias <= 100:
    nivel = "Lendário"
    break
  default:
    nivel = "Imortal"
    break
   
  
}
console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias está no nível de ${nivel}`)

alert (`O Herói tem de saldo de ${saldoVitorias} vitórias está no nível de ${nivel}`)