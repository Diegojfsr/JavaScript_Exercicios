
/*
Desafio: Encontre a palavra mais longa

Dado um texto, escreva uma função que encontre a palavra mais longa presente nele.
*/

function encontrarPalavraMaisLonga(texto) {
    // Remove pontuação e quebra o texto em palavras
    const palavras = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    let palavraMaisLonga = "";
    // Itera sobre as palavras para encontrar a mais longa
    for (let i = 0; i < palavras.length; i++) {
      const palavraAtual = palavras[i];
      if (palavraAtual.length > palavraMaisLonga.length) {
        palavraMaisLonga = palavraAtual;
      }
    }
    return palavraMaisLonga;
  }
  // Exemplo de uso
  const texto = "O céu é azul e o sol brilha intensamente";
  const palavraMaisLonga = encontrarPalavraMaisLonga(texto);
  console.log(palavraMaisLonga); // Saída: "intensamente"