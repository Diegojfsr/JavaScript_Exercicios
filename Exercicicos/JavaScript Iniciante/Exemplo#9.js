
/*
Manipulação de Strings: 
Escreva uma função que receba uma string e retorne a mesma string, 
mas com a primeira letra de cada palavra em maiúsculas.
*/

function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("hello world"));  // Saída: "Hello World"
