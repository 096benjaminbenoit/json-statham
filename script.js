const movies = [
    {
        "Title": "Fight Club",
        "Director": "David Fincher",
        "Duration": 139,
        "Release": 1999,
        "Poster": "https://media.senscritique.com/media/000012359351/300/fight_club.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Edward",
                "Last Name": "Norton",
                "Nationality": "American"
            },
            {
                "First name": "Brad",
                "Last Name": "Pitt",
                "Nationality": "American"
            },
            {
                "First name": "Helena",
                "Last Name": "Bonham Carter",
                "Nationality": "English"
            }
        ]
    },
    {
        "Title": "Pulp Fiction",
        "Director": "Quentin Tarantino",
        "Duration": 154,
        "Release": 1994,
        "Poster": "https://media.senscritique.com/media/000012288077/300/pulp_fiction.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "John",
                "Last Name": "Travolta",
                "Nationality": "American"
            },
            {
                "First name": "Samuel L.",
                "Last Name": "Jackson",
                "Nationality": "American"
            },
            {
                "First name": "Ving",
                "Last Name": "Rhames",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Interstellar",
        "Director": "Christopher Nolan",
        "Duration": 169,
        "Release": 2014,
        "Poster": "https://media.senscritique.com/media/000018762465/300/interstellar.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Matthew",
                "Last Name": "McConaughey",
                "Nationality": "American"
            },
            {
                "First name": "Anne",
                "Last Name": "Hathaway",
                "Nationality": "American"
            },
            {
                "First name": "Jessica",
                "Last Name": "Chastain",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "2001: L'Odysée de l'espace",
        "Director": "Stanley Kubrick",
        "Duration": 160,
        "Release": 1968,
        "Poster": "https://media.senscritique.com/media/000019230851/300/2001_l_odyssee_de_l_espace.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Keir",
                "Last Name": "Dullea",
                "Nationality": "American"
            },
            {
                "First name": "Gary",
                "Last Name": "Lockwood",
                "Nationality": "American"
            },
            {
                "First name": "William",
                "Last Name": "Sylvester",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Blade Runner",
        "Director": "Ridley Scott",
        "Duration": 117,
        "Release": 1982,
        "Poster": "https://media.senscritique.com/media/000019855182/300/blade_runner.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Harrison",
                "Last Name": "Ford",
                "Nationality": "American"
            },
            {
                "First name": "Rutger",
                "Last Name": "Hauer",
                "Nationality": "Dutch"
            },
            {
                "First name": "Sean",
                "Last Name": "Young",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Le Parrain",
        "Director": "Francis Ford Coppola",
        "Duration": 175,
        "Release": 1972,
        "Poster": "https://media.senscritique.com/media/000020072264/300/le_parrain.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Marlon",
                "Last Name": "Brando",
                "Nationality": "American"
            },
            {
                "First name": "Al Pacino",
                "Last Name": "",
                "Nationality": "American"
            },
            {
                "First name": "James",
                "Last Name": "Caan",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Forrest Gump",
        "Director": "Robert Zemeckis",
        "Duration": 142,
        "Release": 1994,
        "Poster": "https://media.senscritique.com/media/000020846881/300/forrest_gump.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Tom",
                "Last Name": "Hanks",
                "Nationality": "American"
            },
            {
                "First name": "Gary",
                "Last Name": "Sinise",
                "Nationality": "American"
            },
            {
                "First name": "Robin",
                "Last Name": "Wright",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Le Seigeur des Anneaux - Le Retour du roi",
        "Director": "Peter Jackson",
        "Duration": 201,
        "Release": 2003,
        "Poster": "https://media.senscritique.com/media/000007087660/300/le_seigneur_des_anneaux_le_retour_du_roi.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Elijah",
                "Last Name": "Wood",
                "Nationality": "American"
            },
            {
                "First name": "Sean",
                "Last Name": "Astin",
                "Nationality": "American"
            },
            {
                "First name": "Viggo",
                "Last Name": "Mortensen",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Le Bon, la Brute et le Truand",
        "Director": "Sergio Leone",
        "Duration": 179,
        "Release": 1966,
        "Poster": "https://media.senscritique.com/media/000008032023/300/le_bon_la_brute_et_le_truand.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Clint",
                "Last Name": "Eastwood",
                "Nationality": "American"
            },
            {
                "First name": "Eli",
                "Last Name": "Wallach",
                "Nationality": "American"
            },
            {
                "First name": "Lee",
                "Last Name": "Van Cleef",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "The Dark Knight - Le Chevalier noir",
        "Director": "Christopher Nolan",
        "Duration": 152,
        "Release": 2008,
        "Poster": "https://media.senscritique.com/media/000018762557/300/the_dark_knight_le_chevalier_noir.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Christian",
                "Last Name": "Bale",
                "Nationality": "English"
            },
            {
                "First name": "Heath",
                "Last Name": "Ledger",
                "Nationality": "American"
            },
            {
                "First name": "Aaron",
                "Last Name": "Eckhart",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Inception",
        "Director": "Christopher Nolan",
        "Duration": 148,
        "Release": 2010,
        "Poster": "https://media.senscritique.com/media/000004710747/300/inception.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Leonardo",
                "Last Name": "DiCaprio",
                "Nationality": "American"
            },
            {
                "First name": "Joseph",
                "Last Name": "Gordon-Levitt",
                "Nationality": "American"
            },
            {
                "First name": "Elliot",
                "Last Name": "Page",
                "Nationality": "Canadian"
            }
        ]
    },
    {
        "Title": "Le Seigeur des Anneaux - La Communauté de l'anneau",
        "Director": "Peter Jackson",
        "Duration": 172,
        "Release": 2001,
        "Poster": "https://media.senscritique.com/media/000004017708/300/le_seigneur_des_anneaux_la_communaute_de_l_anneau.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Elijah",
                "Last Name": "Wood",
                "Nationality": "American"
            },
            {
                "First name": "Ian",
                "Last Name": "McKellen",
                "Nationality": "English"
            },
            {
                "First name": "Sean",
                "Last Name": "Astin",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Apocalypse Now",
        "Director": "Francis Ford Coppola",
        "Duration": 147,
        "Release": 1979,
        "Poster": "https://media.senscritique.com/media/000012235164/300/apocalypse_now.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Marlon",
                "Last Name": "Brando",
                "Nationality": "American"
            },
            {
                "First name": "Martin",
                "Last Name": "Sheen",
                "Nationality": "American"
            },
            {
                "First name": "Robert",
                "Last Name": "Duvall",
                "Nationality": "American"
            }
        ]
    },
    {
        "Title": "Orange mécanique",
        "Director": "Stanley Kubrick",
        "Duration": 136,
        "Release": 1971,
        "Poster": "https://media.senscritique.com/media/000012241934/300/orange_mecanique.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Malcom",
                "Last Name": "McDowell",
                "Nationality": "English"
            },
            {
                "First name": "Patrick",
                "Last Name": "Magee",
                "Nationality": "English"
            },
            {
                "First name": "Mickael",
                "Last Name": "Bates",
                "Nationality": "English"
            }
        ]
    },
    {
        "Title": "Eternal Sunshine of the Spotless Mind",
        "Director": "Michel Gondry",
        "Duration": 108,
        "Release": 2004,
        "Poster": "https://media.senscritique.com/media/000012223508/300/eternal_sunshine_of_the_spotless_mind.jpg",
        "Festivals": ["Canne", "Alpe d'Huez", "Deauville"],
        "Actors": [
            {
                "First name": "Jim",
                "Last Name": "Carrey",
                "Nationality": "Canadian"
            },
            {
                "First name": "Kate",
                "Last Name": "Winslet",
                "Nationality": "English"
            },
            {
                "First name": "Kirsten",
                "Last Name": "Dunst",
                "Nationality": "American"
            }
        ]
    }
]




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