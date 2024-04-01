
/*
Condições: 
Escreva um programa que pergunte ao usuário sua 
idade e imprima se ele é maior ou menor de idade.
*/


let userAge = prompt("Quantos anos você tem?");
userAge = Number(userAge);
if (userAge >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}



