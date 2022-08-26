const API = {
  base: 'https://rickandmortyapi.com/api',
  characters: 'https://rickandmortyapi.com/api/character'
}

function getCharacters(){
  return fetch(API.characters).then(response => response.json());
}

function createCharacter(character){
  console.log(character);
  return `
      <div class="card" style="width: 8rem; height:auto">
        <img class="card-img-top" src="${character.image}" alt="${character.name}">
        <div class="card-body">
          <h4 class="card-title">${character.name}</h4>
          <p class="card-text">${character.species}</p>
        </div>
      </div>
  `
}

async function renderCharacters ()  {
  const data = await getCharacters();
  const characters = data.results;

  // filter


  const container =  document.querySelector('.cards__container');
  const htmlCharacters = characters.map(character => createCharacter(character));
  container.innerHTML = htmlCharacters.join('');
}

renderCharacters()
