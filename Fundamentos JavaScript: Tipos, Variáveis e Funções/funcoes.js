//Funções
//Três formas de escrever função

//Declaração de função:
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto("Marcos");
imprimeTexto("Olá");
imprimeTexto(soma()); // A função imprime texto está imprimindo o resultado da função soma.

function soma(){
    return 2 + 2;
}
//console.log(soma());