// 1) Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
let indice = 13,
  soma = 0,
  k = 0;
while (k < indice) {
  k += 1;
  soma += k;
}
// O valor da variável soma é 91
console.log(`O valor da variável soma ao final do processo é: ${soma}`);
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// resposta
const numero = parseInt(prompt("Digite um número inteiro positivo: "));

let fibonnaci_1 = 0;
let fibonnaci_2 = 1;

while (fibonnaci_2 < numero) {
  const temp = fibonnaci_2;
  fibonnaci_2 = fibonnaci_1 + fibonnaci_2;
  fibonnaci_1 = temp;
}

if (fibonnaci_2 === numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
// A resposta é 9. a logica dessa sequência é sempre o numero anterior + 2;

// b) 2, 4, 8, 16, 32, 64, ____
// A resposta é 128. A lógica é o numero anterior * 2;

// c) 0, 1, 4, 9, 16, 25, 36, ____
// A resposta é 49. Aqui é uma sequência de quadrados(n²). Um número elevado a dois.

// d) 4, 16, 36, 64, ____
// A Resposta: 100. Sequência de quadrados perfeitos.

// e) 1, 1, 2, 3, 5, 8, ____
// A resposta é 13. Sequência de fibonnaci.

// f) 2,10, 12, 16, 17, 18, 19, ____
// A resposta é 200. É uma sequencia de números onde todos iniciam com a letra 'D'

// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.

//Resposta:
// A distância entre as duas cidades é de 100 km. Como os veículos saem de cidades opostas e vão em direção uma à outra, cada um percorre a metade da distância total, ou seja, 50 km.

// O tempo que cada veículo leva para chegar ao ponto de encontro pode ser calculado dividindo a distância percorrida pelo valor da velocidade. Para o carro, temos:

// tempo do carro = distância do ponto de encontro até Ribeirão Preto / velocidade do carro
// = 50 km / 110 km/h
// = 0,4545 horas

// Para o caminhão, temos:

// tempo do caminhão = distância do ponto de encontro até Franca / velocidade do caminhão
// = 50 km / 80 km/h
// = 0,625 horas

// Porém, precisamos considerar que o caminhão leva mais tempo para passar nos pedágios do que o carro. Se o caminhão leva 5 minutos (ou 1/12 de hora) a mais para passar em cada pedágio, precisamos adicionar esse tempo total ao tempo total que o caminhão leva para chegar ao ponto de encontro. Como há 2 pedágios no caminho, o tempo adicional total é de 1/12 * 2 = 1/6 horas. Assim, o tempo total que o caminhão leva para chegar ao ponto de encontro é:

// tempo total do caminhão = tempo do caminhão + tempo adicional
// = 0,625 + 1/6
// = 0,7917 horas

// Agora que temos o tempo que cada veículo leva para chegar ao ponto de encontro, podemos calcular a distância que cada um está da cidade de Ribeirão Preto nesse momento. Para isso, basta multiplicar a velocidade do veículo pelo tempo que ele leva para chegar ao ponto de encontro. Para o carro, temos:

// distância do carro até Ribeirão Preto = velocidade do carro * tempo do carro
// = 110 km/h * 0,4545 horas
// = 50 km

// Para o caminhão, temos:

// distância do caminhão até Ribeirão Preto = distância total - distância do ponto de encontro até Franca - velocidade do caminhão * tempo total do caminhão
// = 100 km - 50 km - 80 km/h * 0,7917 horas
// = 27,08 km

// Assim, podemos concluir que o carro está mais próximo da cidade de Ribeirão Preto quando os veículos se cruzam, já que está a apenas 50 km dela, enquanto o caminhão está a 27,08 km.

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;
//resposta:
let string = "Estágio"; // string de exemplo
let reversedString = ""; // string invertida que será criada

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i]; // adiciona cada caractere no início da string invertida
}
console.log(reversedString); // imprime a string invertida: "oigátsE"
