// APPEL DU FICHIER JSON VIA FETCH //

fetch('movies.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        // remplacement de la cont "movies" créée avant pour test par une nouvelle const "movies" prenend le data du json //
        const movies = data

// je recupere l'input 
const inputElt = document.getElementById("search-input")

//  quand on tape dans l'input je recupere le mot 

inputElt.addEventListener('keyup', filterFilm)

//  cree une fonction 
function filterFilm(event) {

    const getValue = inputElt.value.toLowerCase();
    console.log(getValue)
    // je cherche tout les films dont le titre contient un I 
    // toLowerCase regle le probleme de la majuscule ou minuscule pour l'utilisateur 

    const result2 = movies.filter(movie => movie.Title.toLowerCase().includes(getValue));
    console.log(result2)
    event.preventDefault();
    // je recupere la classe movies
    const moviesCardElt = document.querySelector('.movies')
    moviesCardElt.innerHTML = '';
    console.log(moviesCardElt)
    var newHTML = "";
    //  je fais une boucle sur le tableau 
    for (let movieIndex = 0; movieIndex < result2.length; movieIndex++) {
        console.log(result2[movieIndex])
        //  j'ajouter dans le inner html de moviesCardElt le code suivant :
        newHTML += `
        <div class="movies_card">
            <div class="movies_card_head">
                <div class="movies_card_head_title">
                    <h2 class="movies_card_head_title--name">${result2[movieIndex].Title}</h2>
                    <span class="movies_card_head_title--line"></span>
                    <p class="movies_card_head--realese">${result2[movieIndex].Release}</p>
                </div>
            </div>
            <img class="movies_card--poster" src="${result2[movieIndex].Poster}" alt="">
            <div class="movies_card_container">
                <div class="movies_card_container_left">
                    <ul class="movies_card_container_left_infos">
                        <li class="movies_card_container_left_infos--director">by ${result2[movieIndex].Director}</li>`
        for (let actorIndex = 0; actorIndex < result2[movieIndex].Actors.length; actorIndex++) {
            newHTML += `
                                <li class="movies_card_container_left_infos--actor">${result2[movieIndex].Actors[actorIndex]["First name"]} ${result2[movieIndex].Actors[actorIndex]["Last Name"]}</li>
                            `    //${result2[movieIndex].Actors[actorIndex]["Nationality"]//
        }
        newHTML += `
                    </ul>
                </div>
                <div class="movies_card_container_right">
                    <ul class="movies_card_container_right_infos">
                        <li class="movies_card_container_right_infos--duration">${result2[movieIndex].Duration} min</li>
                        ${result2[movieIndex].Festivals.map(festival => `<li class="movies_card_container_right_infos--fest">${festival}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    moviesCardElt.innerHTML += newHTML;
}

// appliquer cette fonction sur le submit 
//  je recupere mon form 
const formElt = document.getElementById("search-form")

//  quand je soumet je recupere le mot 
formElt.addEventListener("submit", filterFilm)


// FONCTION POUR QUE LES FILMS SE CREENT DES L'OUVERTURE DE LA PAGE //

createMovies();
function createMovies(){
    const moviesCardElt = document.querySelector('.movies')
    moviesCardElt.innerHTML = '';
    console.log(moviesCardElt)
    var newHTML = "";
    //  je fais une boucle sur le tableau 
    for (let movieIndex = 0; movieIndex < movies.length; movieIndex++) {
        console.log(movies[movieIndex])
        //  j'ajouter dans le inner html de moviesCardElt le code suivant :
        newHTML += `
        <div class="movies_card">
            <div class="movies_card_head">
                <div class="movies_card_head_title">
                    <h2 class="movies_card_head_title--name">${movies[movieIndex].Title}</h2>
                    <span class="movies_card_head_title--line"></span>
                    <p class="movies_card_head--realese">${movies[movieIndex].Release}</p>
                </div>
            </div>
            <img class="movies_card--poster" src="${movies[movieIndex].Poster}" alt="">
            <div class="movies_card_container">
                <div class="movies_card_container_left">
                    <ul class="movies_card_container_left_infos">
                        <li class="movies_card_container_left_infos--director">by ${movies[movieIndex].Director}</li>`
        for (let actorIndex = 0; actorIndex < movies[movieIndex].Actors.length; actorIndex++) {
            newHTML += `
                                <li class="movies_card_container_left_infos--actor">${movies[movieIndex].Actors[actorIndex]["First name"]} ${movies[movieIndex].Actors[actorIndex]["Last Name"]}</li>
                            `    //${movies[movieIndex].Actors[actorIndex]["Nationality"]//
        }
        newHTML += `
                    </ul>
                </div>
                <div class="movies_card_container_right">
                    <ul class="movies_card_container_right_infos">
                        <li class="movies_card_container_right_infos--duration">${movies[movieIndex].Duration} min</li>
                        ${movies[movieIndex].Festivals.map(festival => `<li class="movies_card_container_right_infos--fest">${festival}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    moviesCardElt.innerHTML += newHTML;
}
})


