const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const moviesLastFilm = prompt("Один из последних просмотренных фильмов?", "");
const moviesRate = prompt("На сколько оцените его?", "");

personalMovieDB.movies[moviesLastFilm] = moviesRate;
console.log(personalMovieDB.movies);