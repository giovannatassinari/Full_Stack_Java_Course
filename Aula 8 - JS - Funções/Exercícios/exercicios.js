//Ex 1
function parOuImpar(num){
    if(num % 2 == 0){
        console.log("É par.");
    }else{
        console.log("É ímpar");
    }
}

parOuImpar(15)

//Ex2
var numPrimo = (num) => {
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            console.log("Não é primo.")
            break;
        }else{
            console.log("É primo!")
            break;
        }
    }
}

numPrimo(4)

//Ex 3
function contador(callback){  
    setTimeout(function(){  
        for (i = 10; i > 0; i--){
            console.log(i);   
        } 
        callback();
    }, 3000);
}

function msg(){    
    console.log("Feliz Ano Novo!");  
}
  
contador(msg)

//Ex 4
var msg = new Promise (function(resolve, reject){
    setTimeout (function(){
        console.log("Feliz Ano Novo!"); 
    }, 3000)     
});

var contador = new Promise (function(resolve, reject){
    for (i = 10; i > 0; i--){
    console.log(i);   
    }
});

contador.then(function(res) {return console.log(res)})
    .then(function() {return msg})
    
//Ex 5 
async function teste(){
    var contador = await contador;    
        for (i = 10; i > 0; i--){
            console.log(i);
        }   
    console.log("Feliz Ano Novo!");
}

teste()

//Ex 6
let array = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]

//Forma A
function acimaDe7(){
    for (var i = 0; i < array.length; i++){
        if (array[i] > 7.0){
            console.log(array[i]);
        }
    }
}

acimaDe7();

//Forma B
let acimaDe7 = array.filter(function(numero){
    return (numero > 7.0);
})

console.log(acimaDe7)

//Ex 7
var produtos = [
    {
        nome: "leite",
        valor: 3
    },
    {
        nome: "farinha",
        valor: 5
    },
    {
        nome: "óleo",
        valor: 4.50
    },
]

//Forma A 
function precoTotal(produtos){
    var total = 0;
    for(var i = 0; i < produtos.length; i++){
        total = total + produtos[i].valor
    }
    console.log(total);
}

precoTotal(produtos)

//Forma B
var precoTotal = produtos.reduce(function(total, numero){
    return {valor: total.valor + numero.valor}
})

console.log(precoTotal);

//Ex 8
var alunos = [
    {
        nome: "Ana",
        ano: 8
    },
    {
        nome: "Beatriz",
        ano: 8
    },
    {
        nome: "Carlos",
        ano: 8
    },
    {   nome: "Daniel",
        ano: 9
    },
    {
        nome: "Elena",
        ano: 9
    }
]

function disciplinas(alunos){
    for (var i = 0; i < alunos.length; i++){
        if(alunos[i].ano == 8){
            alunos[i].disciplina = "História";
        }else if(alunos[i].ano == 9){
            alunos[i].disciplina = "Física";
        }  
        console.log(alunos[i]);                 
    }       
}

disciplinas(alunos) 