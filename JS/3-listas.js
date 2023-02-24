console.log("Criação de Listas");

const nomes = new Array(
    "Dani", 
    "Marcos",
    );

console.log(nomes);

nomes.push("Tutu", "Juli");//Adiciona item na lista
console.log(nomes);

nomes.splice(3,1);

console.log(nomes);
console.log(nomes[0], nomes[1]);