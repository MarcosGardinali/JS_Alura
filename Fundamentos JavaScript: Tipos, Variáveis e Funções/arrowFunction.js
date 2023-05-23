//Arrow Function

const apresentaArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de uma linha de instrução

const somaNumeros = (num1, num2) =>{
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 9!"
    }else{
        return num1 + num2;
    }
}

console.log(apresentaArrow("Marcos"));
console.log(soma(1, 2));
console.log(somaNumeros(1, 2));