const API = {
  base: 'https://rickandmortyapi.com/api',
  characters: 'https://rickandmortyapi.com/api/character'
}

// DOM elemenrs
const input = document.querySelector('#buscador');
const container =  document.querySelector('.cards__container');


input.addEventListener('input', (e) => {
  const currentText = e.target.value.toLowerCase();
  renderFilterCharacters(currentText);
})



function getCharacters(){
  return fetch(API.characters).then(response => response.json());
}

function createCharacter(character){
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

async function renderFilterCharacters(text)  {

  container.innerHTML = '';
  const data = await getCharacters();
  const characters = data.results;

  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(text));
  const htmlCharacters = filterCharacters.map(character => createCharacter(character));
  container.innerHTML = htmlCharacters.join('');
}



