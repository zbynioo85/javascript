const listOfMovies = [
    'Władca much (1990)',
    'Władca Pierścieni (1978)',
    'Milczenie owiec (1991)',
    'Moja dziewczyna (1991)',
    'Dziewczyna z tatuażem (2011)',
    'Jestem Bogiem (2011)',
    'Jestem legendą (2007)',
    'Matrix (1999)',
    'Zielona mila (1999)',
    '8 Mila (2002)',
    'Uciekająca panna młoda (1999)',
    'Gnijąca panna młoda (2005)',
    'Dzień świra (2002)',
    'Dzień Niepodległości (1996)',
    'Dzień świstaka (1993)',
    'Lista Schindlera (1993)',
    'Czarna lista Hollywood (1991)',
    'Lista klientów (2012)',
    'Teraz albo nigdy (2018)',
    'Niech będzie teraz (2012)',
    'Zabójcze maszyny (2018)',
    'Zabójcza broń (1987)',
    'Znaki (2002)',
    'Znaki na drodze (1969)',
    'Wodne znaki (2013)',
    'Znaki dymne (1998)',
    'Jeden dzień (2011)',
    'Dzień próby (2001)',
    'Dzień z życia blondynki (2014)',
    'Panna Nikt (1996)',
    'Panna Meadows (2014)',
    'Panna Nikt (2010)',
    'Panna Julia (1951)',
]
let FilmsYear = [];
let films1 = [];
let films = [];

function reversMovies() {


    for (let i = 0; i < listOfMovies.length; i++) {
        films[i] = listOfMovies[i].split('(');
        FilmsYear[i] = films[i][1].slice(0, 4);
        films[i].pop();
        films1[i] = FilmsYear[i] + ', ' + films[i];

    }
    return films1;
}

function showMovies() {
    const NumerOfWordsInMovies = tagsCloud();
    let MoviesList = reversMovies();
    const $films = document.querySelector('.films');
    for (let i = 0; i < MoviesList.length; i++) {
        const liElements = document.createElement('li');
        $films.appendChild(liElements);
        liElements.textContent = MoviesList[i];
        if (i % 2 === 0) {
            liElements.classList.add('gray');
        }
        if (NumerOfWordsInMovies[i] === 1) {
            liElements.classList.add('size8')
        }
        if (NumerOfWordsInMovies[i] >= 2 && NumerOfWordsInMovies[i] <= 5) {
            liElements.classList.add('size12');
        }
        if (NumerOfWordsInMovies[i] > 5) {
            liElements.classList.add('size20');
        }
    }
}

function showNumberMovies() {
    const $numberMovies = document.querySelector('.numberMovies');
    $numberMovies.textContent = `Ilość wszystkich filmów: ${listOfMovies.length}`;
}

function tagsCloud() {
    let MoviesList = reversMovies();
    let filmss = [],
        tags = [],
        tags1 = [];
    tagsFilm = [];
    MoviesList.forEach((items, i) => {
        filmss[i] = items.toLowerCase()
        filmss[i] = filmss[i].split(' ');
        filmss[i].shift();
        filmss[i].pop();
        tags += filmss[i] + ',';
        tagsFilm[i] = 0 - (filmss[i].length - 1);
    });
    tags1 = tags.split(',');
    tags1.pop();
    tags1.forEach((items) => {
        items.toLowerCase();
        filmss.forEach((items2, j) => {
            if (items2.includes(items)) {
                tagsFilm[j]++;
            }
        });
    });
    console.log(tagsFilm)
    return tagsFilm;
}


window.onload = function () {
    showMovies();
    showNumberMovies();
    tagsCloud()
}