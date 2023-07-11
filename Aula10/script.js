var x = 5; // numeros inteiros
var y = 6.5; // numeros decimais
var z = x + y; // calculos aritméticos
console.log("Valor de x:", x, "Valor de y:", y, "Valor de Z:", z);

/*
var - let - const

var, em 2015 var passou a ser inutilizado e foi iniciado o desenvolvimento com let

let foi implementado em 2015, surgiu pra corrigir alguns bugs. formato de blocos

*/
var nome = "john doe";
var nome = "jose";
// reperesentação do erro

let name = "john doe";
let name = "john doe"; //SyntaxError: "Name" has already been declared

//Com a let, possui outra funcionalidade importante, que é o escopo de blocos

{
  let x = 2;
}
console.log(x);
//Não pode ser utilizado fora do escopo

{
  var x = 2;
}
//X pode ser usado aqui
console.log(x);
//? Como isso pode impactar nosso código
var x = 10;
// Aqui o X = 10
{
  var x = 2;
  // Aqui o X = 2
}
// Aqui o X = 2
//! Com a LET
let x = 10;
//Aqui o X = 10
{
  let x = 2;
  //Aqui o X = 2
  console.log(x);
}
console.log(x);
//Aqui o X = 10
/* 
Principais diferenças entre let e var
 - var -> é possivel atualizar e re-declarar suas informações. Podemos acessar fora e dentro de um escopo
 - let -> NÃO é possivel re-declarar, apenas, atualizar. NÃO podemos acessar fora do nosso escopo
 - const -> não podemos alterar, re-declarar e nem modificar.
*/

//! CONST
const pi = 3.141592;
pi = 3.15; //Error
const pi = 3.16; //Error
//const -> não podemos alterar, re-declarar e nem modificar.
//Sempre declara como const o que não for alterado.

//! Operador de Atribuição "="
let num = 2; //atribuindo ao number o valor de 2
num == 3; //varifica se o valor de num é igual a 3
num === 4; //Exatamente igual
console.log(num == 3); //false
console.log(num == 2); //true

//! Tipagem de dados
let nome = "João"; //Tipo string = Texto
// '' -> string normal
// "" -> string normal
// `meu nome é ${nome}` -> Meu nome é jõao

let number = 2; //Tipo number = numero inteiro
let numberDecimal = 2.5; //Tipo number = numero decimal
let verificado = true; //Tipo boolean = Verdadeiro
let notVerificado = false; //Tipo boolean = falso
let test;
console.log(test); //Tipo undefined = Indefinido
console.log(testeNull); //Tipo null = vazio

//É possivel declarar mais de uma variável em uma instrução
let car = "gol";
let dono = "John Doe";
let preco = 200;

let car = "gol",
  dono = "John Doe",
  preco = 200;

let moto = "honda",
  dono = "John Doe",
  preco = 200;

let moto2 = "honda",
  dono = "John Doe",
  preco = 200;

//Tipo Objeto

let carro = {
  nome: "gol",
  dono: "john Doe",
  preco: 300,
};
let carro2 = {
  nome: "gol",
  dono: "john Doe",
  preco: 300,
};

let motos = {
  1: {
    nome: "honda",
    dono: "john Doe",
    preco: 200,
  },
  2: {
    nome: "Yamaha",
    dono: "jose",
    preco: 300,
  },
  veiculos: "veiculos",
};