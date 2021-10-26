const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
// const qwe1 = prompt ('Один из просмотренных фильмов?');

// const reit = prompt ('На сколько оцените его?');
const personalMovieDB = {
  count: 0, 
  movies: [],
  actors:{},
  genres: [],
  privat: false
};
if(numberOfFilms > 0){//если число больше нуля, тогда запускается цикл
  personalMovieDB.count = numberOfFilms;
  for(let i = 1; i<= numberOfFilms; i++){
    let qwe1 = prompt('Один из просмотренных фильмов?');
    
    while (!qwe1 || qwe1 === 0){
      qwe1 = prompt('Один из просмотренных фильмов?');
    }
    let reit = +prompt('На сколько оцените его?');{
      while (!(reit >= 1 && reit <= 5)){
        reit = +prompt('На сколько оцените его?');
      }
    }
    personalMovieDB.movies.push({[qwe1]: reit})
  }
}

if (personalMovieDB.count < 10){
  alert('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
  alert('Много');
} else if (personalMovieDB.count > 30){
  alert('Зачем столько');
}else alert ('что')




console.log(personalMovieDB);

