fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('JSON Users:', data))
  .catch(err => console.error('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => console.log('Pokedex entry 1:', data))
  .catch(err => console.error('Fetch failed!', err));
