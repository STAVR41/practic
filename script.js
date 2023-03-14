const nums = [4, 8, 15, 16, 23, 42];

/* Оператор spread разложит массив на отдельные
аргументы: 4, 8, 15 и так далее */

console.log(Math.max(...nums));// 42
// console.log(a); // undefined — объявление а поднялось, поэтому ошибки нет

// let a = 2;

// console.log(a); // 2

// for (let i = 20; i >= 10; i--) {
//    console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//    console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//       continue;
//    } else {
//       console.log(i);
//    }
// }
// let i = 2;
// while (i < 16) {
//    i++
//    if (i % 2 === 0) {
//       continue;
//    } else {
//       console.log(i);
//    }
// }

// function fifthTask() {
//    const arrayOfNumbers = [];

//    for (let i = 5; i <= 10; i++) {
//       console.log(arrayOfNumbers[i - 5] = i)
//    }

//    console.log(arrayOfNumbers);
//    return arrayOfNumbers;
// }

// fifthTask()

// // Место для первой задачи
// function firstTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];

//    // Пишем решение вот тут
//    for (let i = 0; i < arr.length; i++) {
//       result[i] = arr[i]


//    }
//    console.log(result);
//    console.log(arr)

//    // Не трогаем
//    return result;
// }

// firstTask();

// Место для второй задачи
// function secondTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];

//    // Пишем решение вот тут
//    for (let i = 0; i < data.length; i++) {
//       if (typeof data[i] === "number") {
//          data[i] = data[i] * 2;
//       } else if (typeof data[i] == "string") {
//          data[i] = `${data[i]} - done`
//       }

//    }

//    console.log(data);
//    // Не трогаем
//    return data;
// }
// secondTask();
// Место для третьей задачи

// function thirdTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];
//    const result = [];

//    // Пишем решение вот тут
//    for (let i = 1; i < data.length; i++) {
//       result[i - 1] = data[data.length - i]

//    }
//    console.log(data);
//    console.log(result);
//    // Не трогаем
//    return result;
// }

// thirdTask();

// function qwe(num, base) {
//    if (typeof (base) !== "number" || base <= 0) {
//       return num;
//    }

//    let str = "";

//    for (let i = 1; i <= base; i++) {
//       if (i === base) {
//          str += `${num * i}`;
//       } else {
//          str += `${num * i}---`;
//       }
//    }

//    return str;
// }
// qwe(5, 0);

let countFilms
function start() {
   countFilms = +prompt("Сколько фильмов вы посмотрели?", "").trim();
   while (countFilms == null || countFilms == "" || isNaN(countFilms)) {
      countFilms = +prompt("Сколько фильмов вы посмотрели?", "");
   }
}
start();
const personalMovieDB = {
   count: countFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};
function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних фильмов?", "").trim(),
         b = prompt("На сколько оцените?", "").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         console.log("error");
         i--;
      }
   }
}
rememberMyFilms();
function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотренно довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}
detectPersonalLevel();
function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}
function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const janr = prompt("Ваш любимый жанр?", "").trim();
      personalMovieDB.genres[i - 1] = janr;
   }
}
writeYourGenres();
showMyDB();

// function cube(num) {
//    if (typeof (num) !== "number" || !Number.isInteger(num) || num < 0) {
//       console.log("При вычислении произошла ошибка")
//       return
//    }
//    let obCube = num * num * num;
//    let sCube = 6 * (num * num);
//    return `Объём куба:${obCube},площать всей поверхности:${sCube}`
// }
// let qwe = cube(5);
// console.log(qwe);

// function getCoupeNumber(num) {
//    if (typeof (num) !== "number" || num < 0 || !Number.isInteger(num)) {
//       console.log("Ошибка. Проверьте правильность введенного номера места");
//       return
//    }
//    return Math.ceil(num / 4);
// }
// let asd = getCoupeNumber(33);
// console.log(asd);