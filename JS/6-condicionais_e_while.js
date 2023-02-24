console.log("Condicionais e while");

const destinos = new Array(
    "Grécia", 
    "Suíça",
    "Maldivas",
    "Itália",
    "Ibiza",
    );
    
const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Roma";
let contador = 0;
let destinoExiste = false

console.log("Destinos Possíveis:");
console.log(destinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada
    while(contador < destinos.length){
        if(destinos[contador] == destino){
            destinoExiste = true
            break
        }else{
            destinoExiste = false
        }
        contador += 1;
    }
    if(destinoExiste){
        console.log("O destino", destino, "existe");
    }else{
        console.log("O destino", destino, "não existe");
    }
