console.log("Condicionais");

const destinos = new Array(
    "Grécia", 
    "Suíça",
    "Maldivas",
    "Itália",
    "Ibiza",
    );
    
const idadeComprador = 18;
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos Possíveis:");
console.log(destinos);
if(idadeComprador >= 18 || estaAcompanhada){
    destinos.splice(3,1);//Remove um item da lista
    console.log("Destino comprado!");
    console.log(destinos);
}else{
    console.log("O comprador não tem idade para comprar uma passagem!");
}

if (temPassagemComprada && (idadeComprador >=18 || estaAcompanhada)){
    console.log("Pode embarcar");
}else{
    console.log("Não pode embarcar");
}
