
/*
Promises e Fetch API: 
Use a Fetch API para fazer uma chamada para uma API pública 
(como a API do JSONPlaceholder) e exibir os resultados no console.
*/

fetch('<https://jsonplaceholder.typicode.com/posts')>
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Erro:', error));
