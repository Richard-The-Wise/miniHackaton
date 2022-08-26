const API = {
  base: 'https://rickandmortyapi.com/api',
  characters: 'https://rickandmortyapi.com/api/character'
}

function getCharacters(){
  return fetch(API.characters).then(response => response.json());
}

function createCharacter(character){
  return `

  `
}

async function renderCharacters ()  {
  const data = await getCharacters();
  const characters = data.results;
  console.log(characters);
}

renderCharacters()
