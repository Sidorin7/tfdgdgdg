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

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]); // entries - получаем массив в массиве

console.log(newArr);

