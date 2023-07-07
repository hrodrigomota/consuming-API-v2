import { API, reloadPage } from './App.js'

let mainTitle = document.querySelector('#mainTitle')
mainTitle.onclick = reloadPage

const chuckNorrisAPI = new API('Chuck Norris', 'https://api.chucknorris.io/jokes/random')

const pokemonAPI = new API('Pokemon', 'https://pokeapi.co/api/v2/pokemon')

let button = document.querySelector('#button')
button.onclick = function runAPI() {
    let option = document.querySelectorAll('.option')
    
    if(option[0].selected) {
        alert('Nenhuma API foi selecionada.')
        location.reload()
    }

    if(option[1].selected) {
        chuckNorrisAPI.getAPI()
    }

    if(option[2].selected) {
        pokemonAPI.getAPI()
    }
}
