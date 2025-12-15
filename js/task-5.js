// ======= task-01 ======= //

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику
// Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється

// function deliverPizza() {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza() {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));

// console.log(makeMessage('Ultracheese', deliverPizza));

// ======================= //
// ======= task-02 ======= //

// Напишіть функцію, яка приймає два числа і колбек-функцію
// Функція повинна помножити числа між собою та передати результат дії до колбек-функції
// Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог

function processNumbers(a, b, callback) {
  const result = a * b;
  callback(result);
}

function handleResult(number) {
  if (number % 2 === 0) {
    console.log((number *= number));
  } else {
    console.log(Math.sqrt(number));
  }
}

processNumbers(4, 2, handleResult);
processNumbers(3, 3, handleResult);
processNumbers(3, 2, handleResult);

// ======================= //
// ======= task-03 ======= //
// ======================= //
// ======= task-04 ======= //
// ======================= //
// ======= task-05 ======= //
// ======================= //
// ======= task-06 ======= //
// ======================= //
// ======= task-07 ======= //
// ======================= //
// ======= task-08 ======= //
// ======================= //
// ======= task-09 ======= //
// ======================= //
// ======= task-10 ======= //
// ======================= //
