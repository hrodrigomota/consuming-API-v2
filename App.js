class API {
    constructor(name, url) {
        this.name = name;
        this.url = url
    }

    getAPI() {
        if(this.name == "Chuck Norris") {
            let returnAPI = document.querySelector('#return')
            returnAPI.classList.add('return')
            fetch(this.url)
            .then(response => response.json())
            .then(data => returnAPI.innerHTML = `
            <div class="cardChuckNorris">
            <h2>I'm Chuck Norris!</h2>
            <img src="./images/chuck-norris.png" alt"Chuck Norris" id="chuckNorris">
            ${data.value}
            </div>
            `)
            .catch(error => console.error(error))
        }
        if(this.name == "Pokemon") {
            let returnAPI = document.querySelector('#return')
            returnAPI.classList.add('return')
            let id = Math.floor(Math.random() * (649 - 1 + 1)) + 1
            fetch(`${this.url}/${id}`)
            .then(response => response.json())
            .then(data => returnAPI.innerHTML = `
                <div class="cardPokemon">
                    <h2>I'm ${data.name}!</h2>
                    <img src="${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}" alt="Pokemon Animation"> 
                    Number: ${data.id} - ${data.name}
                    <div>
                    <span><strong>Height:</strong> ${data.height}ft</span> | <span><strong>Weight:</strong> ${data.weight}lb</span>
                    </div>
                    <img src="./images/pokemon.png" alt"Pokémon" id="pokemon">
                </div>
                `)
            .catch(error => console.error(error))
        }
    }   
}

function reloadPage() {
    location.reload()
}

export { API, reloadPage }
