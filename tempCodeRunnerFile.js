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
    //alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    console.log("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();