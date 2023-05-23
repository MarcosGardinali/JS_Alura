//Parâmetros de função

function soma(num1, num2){
    return num1 + num2;
}
console.log(soma(10, 15));
console.log(soma(18, 21));

//Parãmetros X Argumentos
//Ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, eu tenho ${idade} anos de idade!`
}
console.log(nomeIdade("Marcos", 21));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}
console.log(multiplica(soma(10, 10), soma(25, 16)));
