
/*
Exercício de Fibonacci:
Neste exercício, você deve criar uma função em JavaScript para calcular o 
n-ésimo número na sequência de Fibonacci.

A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois precedentes. 
Ela começa normalmente com 0 e 1. Os primeiros números da sequência são: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, e assim por diante.

Seu objetivo é criar uma função chamada fibonacci, que aceite um número inteiro positivo n como argumento e 
retorne o n-ésimo número na sequência de Fibonacci.
*/

function fibonacci(n) {
    if (typeof n !== 'number' || n <= 0 || Math.floor(n) !== n) {
        throw new Error('O argumento fornecido deve ser um número inteiro positivo');
    }
    let fib = [0, 1]; // Os primeiros dois números na sequência de Fibonacci
    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calcula o próximo número na sequência
    }
    return fib[n - 1]; // Retorna o n-ésimo número
}