let numberOne = prompt("Digite o primeiro numero");
let numberTwo = prompt("Digite o segundo numero");


let sum = (Number(numberOne) + Number(numberTwo))
let sub = (Number(numberOne) - Number(numberTwo))
let mult = (Number(numberOne) * Number(numberTwo))
let div = (Number(numberOne) / Number(numberTwo))
let rest = (Number(numberOne) % Number(numberTwo))


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto dos dois números é: ${rest}`)


if(sum%2 == 0){
    alert(`O valor ${sum} é par `)
}else{
    alert(`O valor ${sum} é impar `)
}

if(numberOne == numberTwo){
    alert(`Os valores inseridos são iguais`)
}else{
    alert(`Os valores inseridos são diferentes`)
}
