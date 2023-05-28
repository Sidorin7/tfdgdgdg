"use strict";

// filter

// const names = ['Ivan','Sergey', 'Ann', 'Volsemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);\


// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);



// every / some

// const some = [4, 4,5];

// console.log(some.some(item => typeof(item) === 'number')); // если хоть 1 элемент подходит под условие , то выводит true
// console.log(some.every(item => typeof(item) === 'number')); // если все элементы в массиве подходят под условие, то выводит true

// reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                             // 3      4
//                             // 4      5
//                             // 9      1
//                             // 10     3
// const result = arr.reduce((sum, current) => sum + current, 3);// 3 - это начальное значение
// console.log(result);


// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum},  ${current}`);
// console.log(result);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal',
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]); // entries - получаем массив в массиве

// console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => films.rating >= 8)
}


function showListOfFilms(arr) {
    return arr.reduce((acc, curr)=> `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((film,i)=>{
        film.id = i;
        return film;
    });
}
console.log(setFilmsIds(films)); 

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}
console.log(checkFilms(tranformedArray));
