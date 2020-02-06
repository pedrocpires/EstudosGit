// function count(inicio, fim) {
//     //Escreva seu código aqui
//     while (inicio < fim) {
//         console.log("O número atual é " + inicio + " e é menor que " + fim);
//         inicio++
//     }
// }
// count(4, 6);

// array = [2, 4, 78, 32, 76, 1, 0, 99, 1293871239, 93, 10, 2, 3, 4]

// function encontra5(array) {
//     cont = 0;
//     do {
//         if (array[cont] != 5) {
//             console.log(array[cont]);
//             cont++
//         } else {
//             console.log("Encontramos um 5!")
//             break
//         }
//     } while (cont < array.length)
// }

// encontra5(array);

// function tabelaDeMultiplicacao(numero) {
// 	//Escreva seu código aqui
// 	cont = 1;
// 	while (cont < 11) {
// 		console.log(numero + " * " + cont + " = " + cont*numero);
// 		cont++
// 	}
// }

// tabelaDeMultiplicacao(5);

// let texto = "Olá, Pedro. Vamos lá!"

// console.log(texto.slice(0,3));

// let texto = "Olá, sou Carlos!";
// let nomeUsuario = texto.slice(9, 15);
// console.log(nomeUsuario);

// let texto = "abc123";
// let numero = parseInt(texto);
// console.log(numero);
// let variavel = "sdfgh";
// console.log(typeof(variavel));

// const dobro = numero => numero * 2;
// const triplo = numero => numero * 3;
// const aplicar = (numero, operacao) => operacao(numero);
// console.log(aplicar(3,dobro));

// function dobro(numero) {
//     return numero * 2;
// }
// function triplo(numero) {
//     return numero * 3;
// }
// function aplicar(numero, op){
//     return op(numero);
// }
// console.log(aplicar(3,dobro))

// function somar(num1, num2) {
//     return num1 + num2;
// }
// function subtrair(num1, num2) {
//     return num1 - num2;
// }
// function multiplicar(num1, num2) {
//     return num1 * num2;
// }
// function dividir(num1, num2) {
//     return num1 / num2;
// }
// function calculadora(num1, num2, op) {
//     return op(num1, num2);
// }
// console.log(calculadora(5,3,multiplicar));

// function adicionarHttp(url) {
// 	return "http://" + url;
// }

// function processar(listaSites, adicionarHttp) {
// 	for (let i = 0; i < listaSites.length; i++){
// 		listaSites[i] = adicionarHttp(listaSites[i]);
// 	}
// 		return listaSites;
// }
// let sites = ["milabueno.com", "pedro.com", "google.com"];

// console.log(processar(sites, adicionarHttp));

// var ar1 = [2,9];
// var ar2 = [1,7];
// if (ar1>ar2){
// 	console.log("Array 1 MAIOR!")
// } else {
// 	console.log("Array 2 MAIOR!")
// }
// cont = 0;
// var lightX = 0;
// var lightY = 0;
// var direcaoX = "";
// var direcaoY = "";
// var thorX = 4;
// var thorY = 2;
// while (cont < 6) {
// 	// for (let i=0; i < thor.length; i++){
// 	if (lightX < thorX) {
// 		direcaoX = "W";
// 		thorX--
// 	} else if (lightX > thorX) {
// 		direcaoX = "E";
// 		thorX++
// 	} else {
// 		direcaoX = "";
// 	}
// 	if (lightY < thorY) {
// 		direcaoY = "N";
// 		thorY--
// 	} else if (lightY > thorY) {
// 		direcaoY = "S";
// 		thorY++
// 	} else {
// 		direcaoY = "";
// 	}
// 	console.log(direcaoY + direcaoX);
// 	cont++
// // }

// var x = -10;
// console.log(Math.abs(x));
// let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
// let [bariloche, china] = destinosIncriveis.filter(function(destino) {
//     return destino == "Bariloche" || destino == "China";
// })
// console.log(bariloche, china);
let data = new Date();
console.log(data);
// data.getDa
