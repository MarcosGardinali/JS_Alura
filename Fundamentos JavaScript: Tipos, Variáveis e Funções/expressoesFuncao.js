//Declaração de função
function multiplica(num1, num2){
    return num1 * num2;
}

//Expressão de função = Cria uma variável que recebe uma função sem nome, pois o nome é da const. Além de que só pode ser chamada depois do local onde a variável foi declarada no código
const soma = function(num1, num2){
    return num1 + num2;
}

console.log(soma(1, 2));