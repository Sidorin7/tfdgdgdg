"use strict";

// promise - обещание

// console.log('Запрос данных');

// const req = new Promise((resolve, reject) =>{ // resolve - обещание выполнилось, reject - не выпольнилось
//     setTimeout(() =>{
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000)
// });

// req.then((product)=>{ 
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         return data; 
//     }).then((data) =>{
//         console.log(data);
//     });
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(()=>{ // finally - действия должны произойти в при любом исходу
//     console.log('Finally');
// });


const test = time => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

// Promise.all([test(1000), test(2000)]).then(() => { // Promise.all -  ждет оканчание всех промисов в массивe, а потом уже будет выполнять
//     console.log('all');
// });

Promise.race([test(1000), test(2000)]).then(() => { // Promise.race - выполняет свои действия , когда самый первый промис у нас правильно уже отработал
    console.log('all');
});
