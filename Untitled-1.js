'use strict'; // пишем на стандарте es6

a = 5;
console.log(a);

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
var obj = 1;
console.log(leftBorderWidth);

let persone = {

    name: "john",
    age: 25,
    isMarried: false
};

console.log(persone.age);


let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr['2']);


// alert("Hello World!");

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = prompt("Are you 18?", "Yes");

// console.log(typeof (answer));
let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(++incr); //операторы + 1
console.log(--decr);

console.log(5 + 2);
console.log('2' == 2); //3 значения - различия по типам данных,2 - проверка на равенство,

let isChecked = false,
    isClose = true;
console.log(isChecked && isClose); // &&- оператор и (false если одна из переменных false)
console.log(isChecked || !isClose); // || - оператор или (false только если оба false) ! - оператор отрицания