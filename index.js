let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() { // тут функция будет заполнять 2 фильма в объект personalMovieDB
		// можно сделать как на уроке и задавать вопросы по количеству numberOfFilms
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

  

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();

// function showMyDB() {
//   if (personalMovieDB.privat === false) {
//   console.log(personalMovieDB);
// }
  
// }
// showMyDB();



//showMyDB(personalMovieDB.privat); эту функцию надо реализовать
//writeYourGenres(); эту функцию надо реализовать
// let numberOfFilms = 3;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', '');
//       const b = prompt('На сколько оцените его?', '');

  
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//           personalMovieDB.movies[a] = [b, c];
//           console.log('done');
//       } else {
//           console.log('error');
//           i--;
//       }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB (value) {
//     if (!value) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 0; i <= 2; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//     }
// }

// writeYourGenres();

//---------------------------------------------------------

//calback

// function test(value, calback) {
//   calback(value);
// }

// function test2(value) {
//   console.log(value);
// }

// test('Hello', test2);
// test(25, function (params) {
//   console.log(params + params);
// });
// test(25, (params) => {
//   console.log(params + params + params);
// });
// test('5456465456456', test2);

//object

// const obj = {
//   age: 27,
//   firstName: 'Dima',
// };
// const obj2 = {
//   movies: {
//     'logan': 5,
//     'Star wars': 5
//   }
// }
// console.log(obj);
// console.log(obj2);
// const obj3 = {...obj, ...obj2} //копирование объектов
// console.log(obj3);

// const obj4 = Object.assign({}, obj, obj2) //копирование объектов
// console.log(obj4);

// const {...newObj} = obj;
// console.log('rest in obj', newObj);

// const {firstName: name1, age} = obj;

// const name1 = obj.firstName

// console.log(name1, age);

// console.log(obj);

// console.log(Object.keys(obj));
// const arrValues = Object.values(obj)
// console.log(arrValues);

// for (let key in obj) {
//   console.log(typeof obj[key]);
//   if (typeof obj[key] === 'object') {
//     const childObj = obj[key];
//     for (let key1 in childObj) {
//       console.log(`Ключ ${key1} и его значение ${childObj[key1]}`);
//     }
//   } else {
//     console.log(`Ключ ${key} и его значение ${obj[key]}`);
//   }
// }


// const obj = {
//   name: 'Dima',
//   age: 27,
//   getName: function () {
//     console.log(obj.name);
//   },
//   getAge: () => {
//     console.log(obj.age);
//   },
//   setName: function(name) {
//     obj.name = name
//   }
// }
// console.log(obj);
// obj.setName("Masha")
// console.log(obj);

//array

// const arr = ['1', 25, ['1', 2], {name: 'Dima'}];
// arr[0] = '2'
// arr.push('new element')
// console.log(arr);
// for (const iterator of arr) {
//   console.log(iterator);
// }
const arr = [1, 2, 3];
function plusValues(a, b, c) {
  console.log(a + b + c);
}
plusValues(...arr, 5)
// console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// const myFor = function(element, index, arr) {
//   console.log('element', element);
//   console.log('index', index);
//   console.log('arr', arr);
// }

// // arr.forEach(myFor);
// arr.forEach((el) => {
//   console.log(el);
// })