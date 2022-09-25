let money, time;
function start() {
  (money = +prompt("Ваш бюджет на месяц?", "")),
    (time = prompt("Введите дату в формате YYYY-MM-DD", ""));
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  savings: true,
  expenses: {},
  optionalExpenses: {},
  income: [],
};

// // alert(appData.budget / 30);
function chooseExpenses() {
  for (i = 0; i < 1; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      // appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Day budget" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

function checkSavings() {
  if (appData.savings == true) {
    let = save = +prompt("СУММА НАКОПЛЕНИЙ?");
    percent = +prompt("Под какой процент?");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Дохо в месяц с вашего депозита:" + appData.monthIncome);
  }
}
checkSavings();

// for (var i of [0, 1, 2, 3, 4]) {
//   if (i === 3) {
//     console.log("Match found: " + i);
//     break;
//   } else {
//     console.log("No match found!");
//   }
// }
// console.log(calc(3, 3));
// function calc(a, b) {
//   return a + b;
// }

// function retVat() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVat();
// console.log(anotherNum);

// let calc = (a, b) => a + b;

// let calc = function (a, b) {
//   return a + b;
// };

// console.log(calc(3, 4));
// console.log(calc(7, 4));

// function retVar() {
//   let num = 50;
//   return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let i = 3;
// function addTo() {
//   let a = i + 2;
//   return a;
// }
// let b = addTo();
// console.log(b);

// function showFirstMessage(text) {
//   alert(text);
// }

// showFirstMessage("hello world!");

// let i = 0;
// while (i < 3) {
//   i++;
//   console.log(i);
// }

// let f = 4;
// while (f) console.log(--f);

// let i = 0;
// while (e) {
//   e--;
//   console.log(e);
// }

// do {
//   e--;
//   console.log(e);
// } while (e > 2);

// for (; i < 3; ) {
//   console.log(i++); //0,1,2
// }

// console.log(i); //3

// let sum = 1;
// while (true) {
//   let value = +prompt("Ведите число", "");
//   if (!value) break;
//   sum += value;
// }
// console.log("Сумма: " + sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 3 == 0) continue;
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 3 !== 0) {
//     alert(i);
//   }
// }

// let x = 1;
// x = -x;
// console.log(x);

// let y = 3;
// console.log(y - x);

// let z = 2;
// console.log(x ** y);

// let s = "my" + "string";
// console.log(s);

// console.log(2 + 4 + "3"); //63
// console.log(4 - "2"); //2
// console.log(6 / "6"); //1

// let apples = "2",
//   oranges = "3";
// console.log(+apples + +oranges);

// let w = 2 * 2 + 1;
// console.log(w); //5

// let a = 1,
//   b = 2,
//   c = 3 - (a = b + 1);
// console.log(c); //0

// let n = 2;
// // n += 5;
// // n *= 2;
// n *= 3 + 5;

// console.log(n); //16

// let r = 2;
// r += 3 * 5;
// console.log(r); //17

// let counter = 1,
//   d = counter++;
// console.log(d);//1

// let counter = 1;
// d = counter++;
// console.log(d); //1

// let counter1 = 1,
//   e = ++counter1;
// console.log(e); //2

// let count = 3;
// count *= 2;
// console.log(++count); //7

// let count1 = 3;
// console.log((count1 *= 2));
// ++count1;

// let count1 = 3;
// alert(2 * count1);
// ++count1;

// let a = 1,
//   b = 1,
//   c = ++a,
//   d = b++;
// console.log(c); //2
// console.log(d); //1

// let a = 2,
//   x = 1 + (a *= 2);
// console.log(a);
// //4;
// console.log(x);
// //5;

// "" + 1 + 0; //10
// "" - 1 + 0; //-1
// true + false; //1
// 6 / "3"; //2
// "2" * "3"; //6
// 4 + 5 + "px"; //9px
// console.log("$" + 4 + 5); //$45
// console.log("4" - 2); //2
// console.log("4x" - 2); //Nan
// console.log("-9" + 5); //-95;
// console.log("-9" - 5); //-14
// console.log(null + 1); //1
// console.log(undefined + 1); //Nan
// console.log("\t\n" - 2); //-2 пробельные символы игнорируются при преобразщовании в число

// let b = prompt("First number", 1);
// let c = prompt("Second number", 2);
// console.log(+b + +c);
