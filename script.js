// APPEL DU FICHIER JSON VIA FETCH //
                           
                            
                            // listen for scroll event and load more images if we reach the bottom of window
                            









     fetch('movies.json')
     .then(function(response) {
         return response.json()
     })
     .then(function(data){
         // remplacement de la cont "movies" créée avant pour test par une nouvelle const "movies" prenend le data du json //
         const movies = data
         
         //  je recupere mon form 
         const formElt = document.getElementById("search-form") 
     
         // je recupere l'input 
         const inputElt = document.getElementById("search-input")
         
         //  quand on tape dans l'input je recupere le mot 
         inputElt.addEventListener('keyup', filterFilm)
         
         // appliquer cette fonction sur le submit 
         formElt.addEventListener("submit", filterFilm)
     
         //  cree une fonction qui filtre les films
         function filterFilm(event) {
             
             const getValue = inputElt.value.toLowerCase();
             console.log(getValue)
             // je cherche tout les films dont le titre contient un I 
             // toLowerCase regle le probleme de la majuscule ou minuscule pour l'utilisateur 
             
             const result2 = movies.filter(movie => movie.Title.toLowerCase().includes(getValue));
             console.log(result2)
             event.preventDefault();
             
             displayMovies(result2);
     
         }
             
         // je recupere le bouton de tri 
         const btnElt = document.getElementById("sort-input")
         // appliquer cette fonction sur le submit 
         btnElt.addEventListener("click", sortFilm)
     
         //  cree une fonction qui filtre les films
         function sortFilm(event) {
     
             // si le bouton possède la class "sort_asc" tri les films par ordre alphabétique
             if(btnElt.classList.contains('sort_asc')) {
                 const sortedFilms = movies.sort((a, b) => a.Title.localeCompare(b.Title));
                 btnElt.classList.remove('sort_asc');
                 btnElt.classList.add('sort_desc');            
                 displayMovies(sortedFilms);
             } else {
                 // sinon je trie les film dans l'ordre inverse de l'ordre alphabétique
                 const sortedFilms = movies.sort((a, b) => b.Title.localeCompare(a.Title));
                 btnElt.classList.remove('sort_desc');
                 btnElt.classList.add('sort_asc');            
                 displayMovies(sortedFilms);
             }
     
         }
         
         
         
         // FONCTION POUR QUE LES FILMS SE CREENT DES L'OUVERTURE DE LA PAGE //
         
         displayMovies(movies.slice(0,9));

         window.addEventListener('scroll',()=>{
            console.log("scrolled", window.scrollY) //scrolled from top
            console.log(window.innerHeight) //visible part of screen
            if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            //    on compte le nombre de fois ou il y a la classe movie card (donc nombre de film )
                const number = document.querySelectorAll('.movies_card').length
                
                // si on a deja affiché tout les films alors ne rien faire 
                if (number == movies.length){
                    return
                }
                displayMovies(movies.slice(0,number + 9 ));
                console.log(number)

            }
        })
          // SLICE = affiche les données d'un tableau //
     })







// fonction qui ajoute toutes les cards dans le HTML
function displayMovies(movies)
{
    const moviesCardElt = document.querySelector('.movies')
    moviesCardElt.innerHTML = '';
    console.log(moviesCardElt)
    var newHTML = "";
    //  je fais une boucle sur le tableau 
    for (let movieIndex = 0; movieIndex < movies.length; movieIndex++) {
        console.log(movies[movieIndex])
        //  j'ajouter dans le inner html de moviesCardElt le code suivant :
        newHTML += displayCard(movies[movieIndex])
        
    }
    moviesCardElt.innerHTML += newHTML;
}

// fonction qui génère le HTML d'une card
function displayCard(movie){

    let cardHTML = `
    <div class="movies_card">
    <div class="movies_card_head">
    <div class="movies_card_head_title">
    <h2 class="movies_card_head_title--name">${movie.Title}</h2>
    <span class="movies_card_head_title--line"></span>
    <p class="movies_card_head--realese">${movie.Release}</p>
    </div>
    </div>
    <img class="movies_card--poster" src="${movie.Poster}" alt="" loading="lazy">
    <div class="movies_card_container">
    <div class="movies_card_container_left">
    <ul class="movies_card_container_left_infos">
    <li class="movies_card_container_left_infos--director">by ${movie.Director}</li>`
    for (let actorIndex = 0; actorIndex < movie.Actors.length; actorIndex++) {
        cardHTML += `
        <li class="movies_card_container_left_infos--actor">${movie.Actors[actorIndex]["First name"]} ${movie.Actors[actorIndex]["Last Name"]}</li>
        `    //${movie.Actors[actorIndex]["Nationality"]//
    }
    cardHTML += `
    </ul>
    </div>
    <div class="movies_card_container_right">
    <ul class="movies_card_container_right_infos">
    <li class="movies_card_container_right_infos--duration">${movie.Duration} min</li>
    ${movie.Festivals.map(festival => `<li class="movies_card_container_right_infos--fest">${festival}</li>`).join('')}
    </ul>
    </div>
    </div>
    </div>
    `;
    
    return cardHTML;

}

// displayCard();


