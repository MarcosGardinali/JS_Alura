console.log("Condicionais");

const destinos = new Array(
    "Grécia", 
    "Suíça",
    "Maldivas",
    "Itália",
    "Ibiza",
    );
    
const idadeComprador = 17;
const estaAcompanhada = true

console.log("Destinos Possíveis:");
console.log(destinos);
if(idadeComprador >= 18){
    destinos.splice(3,1);//Remove um item da lista
    console.log("Comprador maior de idade");
    console.log(destinos);
}else if(estaAcompanhada){
        //A pessoa é menor de idade
        console.log("A pessoa pode viajar, pois está acompanhada")
        destinos.splice(3,1);
        console.log(destinos)
    }else{
    console.log("O comprador não tem idade para comprar uma passagem!");
}