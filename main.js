console.log("~~Exercicio 1~~")

function calcFatorial(num){
    if (num === 0 || num === 1){
        return 1;
    } else if (num < 0){
        return "Numero invalido";
    } else {
        let fatorial = 1;
        for (let i = 2; i <= num; i++){
            fatorial *=i;
        }
        return fatorial;
    }
}

var num = 9;
console.log("O fatorial do numero " + num + " é " + calcFatorial(num) + ".");

console.log("\n~~Exercicio 2~~")

function repTexto(txt, n){
    for(let i = 0; i < n; i++){
        console.log(txt);
    }
}

repTexto("Ex. 2", 5);

console.log("\n~~Exercicio 3~~")

function calOperacao(valor1, valor2, operacao) {
    if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
        console.log("Operacao inválida. Escolha entre '+', '-', '*' ou '/'.");
        return null;
    }

    if (operacao === '/' && valor2 === 0) {
        console.log("Divisao por zero, retornando resultado *null*:");
        return null;
    }

    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
    }
}

console.log(calOperacao(5, 2, '+'));
console.log(calOperacao(10, 9, '-'));
console.log(calOperacao(4, 6, '*'));
console.log(calOperacao(125, 5, '/'));
console.log(calOperacao(8, 0, '/'));

console.log("\n~~Exercicio 4~~")

function calcTabuada(num) {
    const tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(num * i);
    }
    return tabuada;
}

for(let i = 1; i <=10; i++){
    var tab = calcTabuada(i);
    console.log(tab);
}

console.log("\n~~Exercicio 5~~")

function inverterNumero(num) {
    const numString = num.toString();
    const numInv = parseInt(numString.split('').reverse().join(''));
    return numInv;
}

var numeroNorm = 875;
var numeroInv = inverterNumero(numeroNorm);
console.log(numeroInv);

console.log("\n~~Exercicio 6~~")

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

var palavra = "Brocolis";
var numVogais = contarVogais(palavra);
console.log(numVogais);
palavra = "cEnOuRa"
numVogais = contarVogais(palavra);
console.log(numVogais);

console.log("\n~~Exercicio 7~~")

function estaBemFormada(sequencia) {
    let pilha = [];
  
    for (let i = 0; i < sequencia.length; i++) {
      let caractere = sequencia[i];
  
      if (caractere === '(' || caractere === '[') {
        pilha.push(caractere);
      } 
      else if (caractere === ')' || caractere === ']') {
        let topo = pilha.pop();  
  
        if ((caractere === ')' && topo !== '(') || (caractere === ']' && topo !== '[')) {
          return false; 
        }
      }
    }
  
    return pilha.length === 0;
  }
  
console.log(estaBemFormada("(([]))")); 
console.log(estaBemFormada("(([)])"));

console.log("\n~~Exercicio 8~~")

function gerarPessoasAleatorias(quantidade) {
    const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Juliana'];
    
    function gerarIdadeAleatoria() {
      return Math.floor(Math.random() * (90 - 18 + 1)) + 18;
    }
    
    let pessoas = [];
  
    for (let i = 0; i < quantidade; i++) {
      let pessoa = {
        id: i + 1,
        nome: nomes[Math.floor(Math.random() * nomes.length)], 
        idade: gerarIdadeAleatoria() 
      };
      
      pessoas.push(pessoa);
    }
  
    return pessoas;
  }
  
const pessoas = gerarPessoasAleatorias(5);
console.log(pessoas);

console.log("\n~~Exercicio 9~~")

function calcularMediaIdade(listaPessoas) {
    if (listaPessoas.length === 0) {
      return 0;
    }
  
    let somaIdades = 0;
    for (let i = 0; i < listaPessoas.length; i++) {
      somaIdades += listaPessoas[i].idade;
    }
  
    const media = somaIdades / listaPessoas.length;
  
    return media;
  }
  
console.log("Média de idades:", calcularMediaIdade(pessoas));

console.log("\n~~Exercicio 10~~")

function ordenarPorAtributo(listaPessoas, atributo){
    if (atributo === 'id'){
        let listaTemp = listaPessoas;
        console.log(listaTemp.sort((a, b) => a.id - b.id));
    } else if (atributo === 'idade'){
        let listaTemp = listaPessoas;
        console.log(listaTemp.sort((a, b) => a.idade - b.idade));
    } else if (atributo === 'nome'){
        let listaTemp = listaPessoas;
        console.log(listaTemp.sort((a, b) => a.nome - b.nome));
    } else {
        console.log("Lista vazia.")
    }
}

console.log("Lista ordenada por id: " + "\n");
ordenarPorAtributo(pessoas, 'id');
console.log("\n" + "Lista ordenada por idade: " + "\n");
ordenarPorAtributo(pessoas, 'idade');
console.log("\n" + "Lista ordenada por nome: " + "\n");
ordenarPorAtributo(pessoas, 'nome');