'use strict';

// let money = prompt("Ваш бюджет на месяц?", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };
// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?", ''),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;


// console.log(appData["expenses"]);
// alert(appData.budget / 30);

// for (let i = 1; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// let y = 1;
// let x = 0 || "" || 2 || undefined || true || falsе;
// let a = "Ужик";
// let b = "Яблоко";

// function checkMin(a, b) {
//     return (a > b) ? a + " Больше чем B" : b + " Больше чем А";
// }

//console.log(checkMin(73, 50));

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumTo(50));
// function showPrimes(n) {

//     for (var i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;

//         //alert(i);  // простое
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     for (var i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }
// showPrimes(10);
// function find(array, value) {
//     if (array.indexOf) { // если метод существует
//         return array.indexOf(value);
//     }

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) return i;
//     }

//     return -1;
// }

// var arr = ["a", -1, 2, "b"];

// var index = find(arr, 2);

// alert(index);
// шаг 1
// function getMaxSubSum(arr) {
//     var maxSum = 0,
//         partialSum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         partialSum += arr[i];
//         maxSum = Math.max(maxSum, partialSum);
//         //alert(maxSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
//     console.log(partialSum);
// }
//alert(getMaxSubSum([100, -9, 2, -3, 5]));
// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = arr.map(function(name) {
//     return name.length;

// });


// alert(arrLength);

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

            console.log("done");

            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }

    };
}

chooseExpences();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма депозита?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с депозита: " + appData.monthIncome);
    }
}

checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    //console.log("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        alert("Это высокий уровень достатка!");
    } else {
        alert("Произошла ошибка");
    }
}

detectLevel();


function chooseOptExpenses() { // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}

chooseOptExpenses();